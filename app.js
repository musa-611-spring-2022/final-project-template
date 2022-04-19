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
let destinations;
let originLayer;
let destinationLayer;

let uniqueName;
let attractivenessProperties;

let faIcon = 'fa-tree';

let dTSlider = document.getElementById('distanceThreshold');
let dTOutput = document.getElementById('distanceThresholdValue');

let dESlider = document.getElementById('distanceExponent');
let dEOutput = document.getElementById('distanceExponentValue');

function getColoredIcon(color) {
  return L.divIcon({
    html: `<i class="fas ${faIcon} fa-3x" style="color:${color}"></i>`,
    iconSize: [20, 20],
    className: 'icon-marker',
  });
}

function displayHuffOnMap(map, originProbabilities, nameProperty) {
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
        let stringToShow = 'People in this census tract are most likely to use:<br />';
        let originFillColor;
        let originFillOpacity;
        console.log(f.probabilities);
        f.probabilities.splice(0, 5).forEach((dest, i) =>  {
          let destination = dest.feature;
          let parkName = destination.properties[nameProperty];
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
      } else {
        l.setStyle({
          fillOpacity: 0,
          stroke: 0,
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

  console.log(destinationsToShowFC);
  destinationLayer = L.geoJSON(destinationsToShowFC, {
    onEachFeature(f, l) {
      l.bindPopup(`${f.properties[uniqueName]}, ${attractivenessProperties}: ${f.properties[attractivenessProperties]}`);
    },
    pointToLayer(point, latlng) {
      return L.marker(latlng, { icon: getColoredIcon(point.properties.color) });
    },
  }).addTo(map);
}

function runHuffModel(origins, destinations, dT, dE, uniqueNameProperty, attractivenessProperty) {
  // HUFF MODEL – GENERATE PROBABILITIES
  let originProbabilities = Huff.generateProbabilities(origins, destinations, {
    distanceThreshold: dT, distanceExponent: dE, destinationAttractivenessProperty: attractivenessProperty, originKeyProperty: 'GEOID10',
  });

  displayHuffOnMap(customMap, originProbabilities, uniqueName);
}

// Update the current slider value (each time you drag the slider handle)
dTSlider.oninput = function () {
  dTOutput.innerHTML = this.value;
  runHuffModel(
    blockGroups,
    destinations,
    dTSlider.value,
    dESlider.value,
    uniqueName,
    attractivenessProperties,
  );
};

dESlider.oninput = function () {
  dEOutput.innerHTML = this.value;
  runHuffModel(
    blockGroups,
    destinations,
    dTSlider.value,
    dESlider.value,
    uniqueName,
    attractivenessProperties,
  );
};

// loading origin and destination data from geojson files

let indego = 'https://kiosks.bicycletransit.workers.dev/phl';
let phillyParks = 'data/PPR_Properties.geojson';

let destDataSet = phillyParks;

if (destDataSet === phillyParks) {
  uniqueName = 'PUBLIC_NAME';
  attractivenessProperties = 'ACREAGE';
  faIcon = 'fa-tree';
} else if (destDataSet === indego) {
  uniqueName = 'name';
  attractivenessProperties = 'bikesAvailable';
  faIcon = 'fa-bicycle';
  dTSlider.setAttribute('min', 0.1);
  dTSlider.setAttribute('max', 1.5);
  dTSlider.setAttribute('step', 0.1);
  dTSlider.value = 0.5;
  dESlider.value = 1.5;
}

dTOutput.innerHTML = dTSlider.value; // Display the default slider value
dEOutput.innerHTML = dESlider.value; // Display the default slider value


fetch('data/Census_Tracts_2010.geojson')
  .then(resp => resp.json())
  .then(bgData => {
    blockGroups = bgData;
    fetch(destDataSet).then(resp => resp.json()).then(destData => {
      destinations = destData;
      let propertiesColored = Huff.setDestinationColors(destinations);
      runHuffModel(
        blockGroups,
        propertiesColored,
        dTSlider.value,
        dESlider.value,
        uniqueName,
        attractivenessProperties,
      );
    });
  });

