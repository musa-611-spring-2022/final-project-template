// Initialize leaflet.js
let L = require('leaflet');
let Huff = require('huffmodel');
let turf = require('@turf/turf');
let isUrl = require('is-url');
// Initialize the map
let customMap = L.map('map', {
  scrollWheelZoom: false,
});
// Set the position and zoom level of the map
customMap.setView([39.9926, -75.1652], 12);

let origins;
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
let attractivenessValue = document.getElementById('attractivenessValue');


let destPropText = document.getElementById('destinationProperties');


function getFeatureProperties(feature) {
  return Object.keys(feature.properties).join(', ');
}

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
        let stringToShow = 'People in this origin are most likely to go to:<br />';
        let originFillColor;
        let originFillOpacity;
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

  destinationLayer = L.geoJSON(destinationsToShowFC, {
    onEachFeature(f, l) {
      let attractivenessString = '';

      attractivenessProperties.split(',').forEach(prop => {
        attractivenessString += `${prop}: ${f.properties[prop]}<br />`;
      });
      l.bindPopup(`<b style="color:${f.properties.color}">${f.properties[uniqueName]}</b><br /> ${attractivenessString}`);
    },
    pointToLayer(point, latlng) {
      return L.marker(latlng, { icon: getColoredIcon(point.properties.color) });
    },
  }).addTo(map);
}

function runHuffModel(origins, destinations, dT, dE, uniqueNameProperty, attractivenessProperties) {
  // HUFF MODEL – GENERATE PROBABILITIES
  let originProbabilities = Huff.generateProbabilities(origins, destinations, {
    distanceThreshold: dT, distanceExponent: dE, destinationAttractivenessProperties: attractivenessProperties.split(','), originKeyProperty: 'GEOID10',
  });
  displayHuffOnMap(customMap, originProbabilities, uniqueName);
}

// Update the current slider value (each time you drag the slider handle)
dTSlider.oninput = function () {
  dTOutput.innerHTML = this.value;
  runHuffModel(
    origins,
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
    origins,
    destinations,
    dTSlider.value,
    dESlider.value,
    uniqueName,
    attractivenessProperties,
  );
};

attractivenessValue.onchange = function () {
  attractivenessProperties = this.value;
  runHuffModel(
    origins,
    destinations,
    dTSlider.value,
    dESlider.value,
    uniqueName,
    attractivenessProperties,
  );
};


// loading origin and destination data from geojson files

function updateRangeValues() {
  dTOutput.innerHTML = dTSlider.value; // Display the default slider value
  dEOutput.innerHTML = dESlider.value; // Display the default slider value
  attractivenessValue.value = attractivenessProperties;
}

function fetchDatasets(originDataSet, destinationDataSet, updateBounds = null) {
  fetch(originDataSet)
    .then(resp => resp.json())
    .then(origData => {
      origins = origData;
      fetch(destinationDataSet).then(resp => resp.json()).then(destData => {
        destinations = destData;

        // SPECIAL CASE TO GET ADD'L PROPERTIES FOR PARKS
        if (destinationDataSet === 'data/PPR_Properties.geojson') {
          fetch('data/facility_properties.json')
            .then(resp => resp.json()).then(propData => {
              let properties = Object.keys(propData[7]);
              let newFeatures = [];
              (Object.keys(destinations.features)).forEach(i => {
                if (propData[i]) {
                  properties.forEach(p => {
                    destinations.features[i].properties[p] = propData[i][p];
                  });
                  newFeatures.push(destinations.features[i]);
                }
              });
              console.log(newFeatures);
              destinations.features = newFeatures;
              destinationProperties = getFeatureProperties(destinations.features[6]);
              destPropText.innerHTML = getFeatureProperties(destinations.features[0]);
              let propertiesColored = Huff.setDestinationColors(destinations);
              if (updateBounds) {
                let bounds = turf.bbox(destinations);
                customMap.fitBounds([[bounds[1], bounds[0]], [bounds[3], bounds[2]]]);
              }
              runHuffModel(
                origins,
                propertiesColored,
                dTSlider.value,
                dESlider.value,
                uniqueName,
                attractivenessProperties,
              );
            });
        } else {
          destinationProperties = getFeatureProperties(destinations.features[0]);
          destPropText.innerHTML = getFeatureProperties(destinations.features[0]);
          let propertiesColored = Huff.setDestinationColors(destinations);
          if (updateBounds) {
            let bounds = turf.bbox(destinations);
            customMap.fitBounds([[bounds[1], bounds[0]], [bounds[3], bounds[2]]]);
          }
          runHuffModel(
            origins,
            propertiesColored,
            dTSlider.value,
            dESlider.value,
            uniqueName,
            attractivenessProperties,
          );
        }
      });
    });
}

// 'data/Census_Block_Groups_2010.geojson'
// Block groups:  https://opendata.arcgis.com/datasets/2f982bada233478ea0100528227febce_0.geojson
// Tracts:  https://opendata.arcgis.com/datasets/8bc0786524a4486bb3cf0f9862ad0fbf_0.geojson
// Parks:  https://opendata.arcgis.com/datasets/d52445160ab14380a673e5849203eb64_0.geojson
// Bike stations: https://kiosks.bicycletransit.workers.dev/phl

let data = {
  blockgroup: 'data/Census_Block_Groups_2010.geojson',
  tract: 'data/Census_Tracts_2010.geojson',
  indego: 'https://kiosks.bicycletransit.workers.dev/phl',
  parks: 'data/PPR_Properties.geojson',
};

let datasetinputs = document.getElementsByClassName('datasetinputs');

function getDatasets(event) {
  let orig;
  let dest;
  let destDatasetURL = document.getElementById('customDestinationURLSettings');
  let originDatasetURL = document.getElementById('originDatasetURL');

  if (document.getElementById('destDataset').value === 'customurl') {
    destDatasetURL.style.display = 'block';
    dest = document.getElementById('destDatasetURL').value;
  } else {
    destDatasetURL.style.display = 'none';
    dest = data[document.getElementById('destDataset').value];
  }

  if (document.getElementById('originDataset').value === 'customurl') {
    originDatasetURL.style.display = 'block';
    orig = document.getElementById('originDatasetURL').value;
  } else {
    originDatasetURL.style.display = 'none';
    orig = data[document.getElementById('originDataset').value];
  }

  let updateBounds = false;
  if (event && event.srcElement.id === 'destDataset') {
    updateBounds = true;
  }

  if (dest === 'data/PPR_Properties.geojson') {
    uniqueName = 'PUBLIC_NAME';

    //    attractivenessProperties = 'ACREAGE';
    attractivenessProperties = 'programNum';
    faIcon = 'fa-tree';
    dTSlider.setAttribute('min', 1);
    dTSlider.setAttribute('max', 10);
    dTSlider.setAttribute('step', 1);
    dTSlider.value = 7;
    dESlider.value = 1;
  } else if (dest === 'https://kiosks.bicycletransit.workers.dev/phl') {
    uniqueName = 'name';
    attractivenessProperties = 'bikesAvailable,totalDocks,docksAvailable';
    faIcon = 'fa-bicycle';
    dTSlider.setAttribute('min', 0.1);
    dTSlider.setAttribute('max', 1.5);
    dTSlider.setAttribute('step', 0.1);
    dTSlider.value = 0.5;
    dESlider.value = 1.5;
  } else {
    uniqueName = document.getElementById('destUniqueName').value;
    attractivenessProperties = '';
    faIcon = 'fa-map-marker';
    dTSlider.setAttribute('min', 1);
    dTSlider.setAttribute('max', 10);
    dTSlider.setAttribute('step', 1);
    dTSlider.value = 7;
    dESlider.value = 1;
  }
  updateRangeValues();

  fetchDatasets(orig, dest, updateBounds);
}

for (let i = 0; i < datasetinputs.length; i++) {
  datasetinputs[i].addEventListener('change', getDatasets);
}

getDatasets();
