// Initialize leaflet.js
let L = require('leaflet');
let Huff = require('huffmodel');
let turf = require('@turf/turf');
// Initialize the map
let customMap = L.map('map', {
  scrollWheelZoom: false,
});
// Set the position and zoom level of the map
customMap.setView([39.9926, -75.1652], 12);

let blockGroups;
let properties;
let originLayer;
let destinationLayer;

let dTSlider = document.getElementById('distanceThreshold');
let dTOutput = document.getElementById('distanceThresholdValue');

let dESlider = document.getElementById('distanceExponent');
let dEOutput = document.getElementById('distanceExponentValue');

dTOutput.innerHTML = dTSlider.value; // Display the default slider value
dEOutput.innerHTML = dESlider.value; // Display the default slider value

function getColoredIcon(color) {
  return L.divIcon({
    html: `<i class="fas fa-tree fa-3x" style="color:${color}"></i>`,
    iconSize: [20, 20],
    className: 'icon-marker',
  });
}

function displayHuffOnMap(map, originProbabilities) {
  // Initialize the base layer
  if (originLayer) {
    map.removeLayer(originLayer);
    map.removeLayer(destinationLayer);
  }
  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OSM Mapnik <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(customMap);

  let uniqueDestinationNames = [];
  let destinationsToShow = [];
  originLayer = L.geoJSON(originProbabilities, {
    onEachFeature(f, l) {
      if (f.probabilities.length > 0) {
        let stringToShow = 'Residents in this block group are most likely to visit: ';
        let originFillColor;
        let originFillOpacity;
        console.log(f.probabilities);
        f.probabilities.splice(0, 5).forEach((dest, i) =>  {
          let destination = dest.feature;
          let parkName = destination.properties.PUBLIC_NAME;
          if (i === 0) {
            originFillColor = destination.properties.color;
            originFillOpacity = dest.probability;
          }
          if (i === 0 && !uniqueDestinationNames.includes(parkName)) {
            uniqueDestinationNames.push(parkName);
            destinationsToShow.push(dest.feature);
          }
          let probString = `${(dest.probability * 100).toFixed(2)}%`;
          stringToShow += `<b style="color:${destination.properties.color}">${parkName}</b> - ${probString}<br />`;
        });
        l.bindPopup(stringToShow);
        l.setStyle({
          fillColor: originFillColor,
          fillOpacity: originFillOpacity,
          color: 'white',
          weight: 0.4,
        });
      }
    },
  }).addTo(map);

  let destinationsToShowCenters = [];
  turf.featureEach(turf.featureCollection(destinationsToShow), (c, i) => {
    let feature = turf.center(c);
    feature.properties = c.properties;
    destinationsToShowCenters.push(feature);
  });

  let destinationsToShowFC = turf.featureCollection(destinationsToShowCenters);
  // destinationsToShowFC = Huff.setDestinationColors(destinationsToShowFC);

  destinationLayer = L.geoJSON(destinationsToShowFC, {
    onEachFeature(f, l) {
      l.bindPopup(`${f.properties.PUBLIC_NAME}, Acreage: ${f.properties.ACREAGE}`);
    },
    pointToLayer(point, latlng) {
      return L.marker(latlng, { icon: getColoredIcon(point.properties.color) });
    },
  }).addTo(map);
}

function runHuffModel(origins, destinations, dT, dE) {
  // HUFF MODEL – GENERATE PROBABILITIES
  let originProbabilities = Huff.generateProbabilities(origins, destinations, { distanceThreshold: dT, distanceExponent: dE, originKeyProperty: 'GEOID10' });

  displayHuffOnMap(customMap, originProbabilities);
}

// Update the current slider value (each time you drag the slider handle)
dTSlider.oninput = function () {
  dTOutput.innerHTML = this.value;
  runHuffModel(blockGroups, properties, dTSlider.value, dESlider.value);
};

dESlider.oninput = function () {
  dEOutput.innerHTML = this.value;
  runHuffModel(blockGroups, properties, dTSlider.value, dESlider.value);
};

// loading origin and destination data from geojson files
fetch('data/Census_Tracts_2010.geojson')
  .then(resp => resp.json())
  .then(bgData => {
    blockGroups = bgData;
    fetch('data/PPR_Properties.geojson').then(resp => resp.json()).then(propData => {
      properties = propData;
      let propertiesColored = Huff.setDestinationColors(properties);
      runHuffModel(blockGroups, propertiesColored, dTSlider.value, dESlider.value);
    });
  });

