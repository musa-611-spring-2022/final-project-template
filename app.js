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

  // SHOW CENSUS BLOCK GROUPS ON MAP
  L.geoJSON(origins).addTo(map);

  // SHOW PARKS ON MAP
  let destinationCenters = [];
  turf.featureEach(destinations, (c, i) => { destinationCenters.push(turf.center(c)); });
  // showing first 20 parks
  destinationCenters = turf.featureCollection(destinationCenters.slice(0, 20));
  L.geoJSON(destinationCenters).addTo(map);

  // HUFF MODEL – GENERATE PROBABILITIES
  Huff.generateProbabilities(origins, destinations, { distanceThreshold: 3 });
}

fetch('data/Census_Block_Groups_2010.geojson')
  .then(resp => resp.json())
  .then(bgData => {
    let blockGroups = bgData;
    fetch('data/PPR_Properties.geojson').then(resp => resp.json()).then(propData => {
      let properties = propData;
      main(blockGroups, properties);
    });
  });

