// Initialize leaflet.js
let L = require('leaflet');
let Huff = require('huffmodel');
let turf = require('@turf/turf');

function main(origins, destinations) {
  // Initialize the map
  let map = L.map('map', {
    scrollWheelZoom: false,
  });

  // Set the position and zoom level of the map
  map.setView([39.9526, -75.1652], 12);

  // Initialize the base layer
  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OSM Mapnik <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  // HUFF MODEL – GENERATE PROBABILITIES
  let destinations_with_colors = Huff.setDestinationColors(destinations);

  let originProbabilities = Huff.generateProbabilities(origins, destinations_with_colors, { distanceThreshold: 3, originKeyProperty: 'GEOID10' });


  let uniqueDestinationNames = [];
  let destinationsToShow = [];
  L.geoJSON(originProbabilities, {
    onEachFeature(f, l) {
      let destination = f.probabilities[0].feature;
      let parkName = destination.properties.PUBLIC_NAME;
      if (!uniqueDestinationNames.includes(parkName)) {
        uniqueDestinationNames.push(parkName);
        destinationsToShow.push(f.probabilities[0].feature);
      }
      let prob = `${(f.probabilities[0].probability * 100).toFixed(2)}%`;
      let stringToShow = `Residents in this block group have a ${prob} of visiting ${parkName}`;
      l.bindPopup(stringToShow);
      console.log(destination);
      l.setStyle({ color: destination.color });
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

  L.geoJSON(destinationsToShowFC, {
    onEachFeature(f, l) {
      l.bindPopup(f.color);
    },
  }).addTo(map);
}

// loading origin and destination data from geojson files
fetch('data/Census_Tracts_2010.geojson')
  .then(resp => resp.json())
  .then(bgData => {
    let blockGroups = bgData;
    fetch('data/PPR_Properties.geojson').then(resp => resp.json()).then(propData => {
      let properties = propData;
      main(blockGroups, properties);
    });
  });

