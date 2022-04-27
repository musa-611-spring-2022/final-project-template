/* globals Papa */

const map = L.map('map').setView([40, -75.14], 12);
let layerGroup = L.layerGroup().addTo(map);
let Pokestop = { features: [] };
let Destination = { features: [] };
let dis = [];

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

//Add start point to map and calculate the route
let start;
let route;
map.on('click', function (e) {
  //Delete the original start point and route
  if (start) {
    map.removeLayer(start);
  }
  if (route) {
    map.removeControl(route);
  }

  start = L.marker(e.latlng).addTo(map);

  //calculate distance between start and each destination
  Destination['features'].forEach(feature => {
    let lat = feature.geometry.coordinates[1];
    let lng = feature.geometry.coordinates[0];
    let d = distance(start._latlng.lat, start._latlng.lng, lat, lng);
    dis.push(d)
  }); 
  //normalize distance
  let max = Math.max.apply(null,dis);
  let min = Math.min.apply(null,dis);
  for(let i = 0; i < dis.length; i++) {
    dis[i] = (max - dis[i]) / (max - min);
  }
});

//function that calculate distance
function distance(lat1, lon1, lat2, lon2) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		return dist;
	}
}

//every factor list
let food = [];
let drink = [];
let busstop = [];
let crime = [];
let pokestop = [];
let gym = [];
let raid = [];
let nest = [];

//evnet of the checkbox in filter board
function Filterfactor() {
  let filtercheckfood = document.getElementById("Food");
  let filtercheckdrink = document.getElementById("Drink");
  let filtercheckbusstop = document.getElementById("Bus Stop");
  let filtercheckcrime = document.getElementById("Crime");
  //let filtercheckpokestop = document.getElementById("filter Poke Stops");
  let filtercheckgym = document.getElementById("filter Gym");
  let filtercheckraid = document.getElementById("filter Raid");
  let filterchecknest = document.getElementById("filter Nest");
  food = [];
  drink = [];
  busstop = [];
  crime = [];
  pokestop = [];
  gym = [];
  raid = [];
  nest = [];
  Destination['features'].forEach(feature => pokestop.push(feature.properties.total_pokestop));  
  if (filtercheckfood.checked === true){
    Destination['features'].forEach(feature => food.push(feature.properties.contain_food));  
  } if (filtercheckdrink.checked === true){
    Destination['features'].forEach(feature => drink.push(feature.properties.contain_drink));
  } if (filtercheckbusstop.checked === true){
    Destination['features'].forEach(feature => busstop.push(feature.properties.contain_busstop));
  } if (filtercheckcrime.checked === true){
    Destination['features'].forEach(feature => crime.push(feature.properties.total_crime));
  }/* if (filtercheckpokestop.checked === true){
    pokestop = Destination['features'].forEach(feature => pokestop.push(feature.properties.contain_food));
  }*/ if (filtercheckgym.checked === true){
    Destination['features'].forEach(feature => gym.push(feature.properties.contain_gym));
  } if (filtercheckraid.checked === true){
    Destination['features'].forEach(feature => raid.push(feature.properties.contain_raid));
  } if (filterchecknest.checked === true){
    Destination['features'].forEach(feature => nest.push(feature.properties.contain_nest));
  }
}

//When click the button figure out the route
let score = [];
let index = 0;
function getRoute() {
  if (route) {
    map.removeControl(route);
  }
  score = [];
  for (let i = 0; i < Destination.features.length; i++) {
    let a1 = 0;
    let a2 = 0;
    let a3 = 0;
    let a4 = 0;
    let a5 = 0;
    let a6 = 0;
    let a7 = 0;
    let a8 = 0;
    let a9 = 0;
    if (pokestop.length > 0) {
      a1 = pokestop[i];
    } if (food.length > 0) {
      a2 = food[i];
    } if (drink.length > 0) {
      a3 = drink[i];
    } if (busstop.length > 0) {
      a4 = busstop[i];
    } if (crime.length > 0) {
      a5 = crime[i];
    } if (gym.length > 0) {
      a6 = gym[i];
    } if (raid.length > 0) {
      a7 = raid[i];
    } if (nest.length > 0) {
      a8 = nest[i];
    } if (dis.length > 0) {
      a9 = dis[i];
    }
    score.push(2 * a1 + 3 * a2 + 3 * a3 + 3 * a4 + 3 * a5 + 3 * a6 + 3 * a7 + 3 * a8 + 5 * a9)
  }
  let max_score = Math.max.apply(null, score);
  index = score.indexOf(max_score);

  route = L.Routing.control({
    waypoints: [
      L.latLng(start._latlng.lat, start._latlng.lng),
      L.latLng(Destination.features[index].geometry.coordinates[1], Destination.features[index].geometry.coordinates[0])
    ],
    lineOptions : {
      addWaypoints: false
    },
    router: L.Routing.mapbox('pk.eyJ1Ijoia3JtZXRlb3IiLCJhIjoiY2wwcjM2NmJoMjliZDNlcnZiOHJ5MjdhNSJ9.DHn_7OJhlBwMbxtFajnu2g')
  }).addTo(map);
}

//Load poke stop data
function loadPokestopData() {
  fetch('pokestop.geojson')
    .then(resp => resp.json())
    .then(data => {
      Pokestop = data;
    });
}

//Load Philly bound
function loadCityLimit() {
  fetch('city_limits.geojson')
    .then(resp => resp.json())
    .then(data => {
      L.geoJSON(data, {style: outlineStyle})
      .addTo(map);
    });
}

//Load destination data
function loadDestinationData() {
  fetch('destination.geojson')
    .then(resp => resp.json())
    .then(data => {
      Destination = data;
    });
}

//Philly bound style
let outlineStyle = {
  "color": "#000000",
  "weight": 1,
  "fillOpacity": 0
};

//Define icon for pokestop showcase
let pokestopIcon = L.icon({
  iconUrl: 'pic/pokestop.png',
  iconSize: [50, 50],
});

let gymIcon = L.icon({
  iconUrl: 'pic/gym.png',
  iconSize: [40, 40],
});

let raidIcon = L.icon({
  iconUrl: 'pic/raid.png',
  iconSize: [50, 50],
});

let nestIcon = L.icon({
  iconUrl: 'pic/nest.png',
  iconSize: [37, 35],
});

//show pokestops when interacting with checkbox
function Showpokestop() {
  layerGroup.clearLayers();
  let checkpokestop = document.getElementById("Poke Stops");
  let checkgym = document.getElementById("Gym");
  let checkraid = document.getElementById("Raid");
  let checknest = document.getElementById("Nest");
  if (checkpokestop.checked === true){
    let showpokestop = Pokestop['features'].filter(feature => feature.properties.kind === "PokeStop");
    L.geoJSON(showpokestop, { pointToLayer: (p, latlng) => L.marker(latlng, { icon: pokestopIcon }) })
    .bindTooltip(l => l.feature.properties.name)
    .addTo(layerGroup);
  } if (checkgym.checked === true){
    let showgym = Pokestop['features'].filter(feature => feature.properties.kind === "Gym");
    L.geoJSON(showgym, { pointToLayer: (p, latlng) => L.marker(latlng, { icon: gymIcon }) })
    .bindTooltip(l => l.feature.properties.name)
    .addTo(layerGroup);
  } if (checkraid.checked === true){
    let showraid = Pokestop['features'].filter(feature => feature.properties.kind === "EX Raid Gym");
    L.geoJSON(showraid, { pointToLayer: (p, latlng) => L.marker(latlng, { icon: raidIcon }) })
    .bindTooltip(l => l.feature.properties.name)
    .addTo(layerGroup);
  } if (checknest.checked === true){
    let shownest = Pokestop['features'].filter(feature => feature.properties.kind === "Nest");
    L.geoJSON(shownest, { pointToLayer: (p, latlng) => L.marker(latlng, { icon: nestIcon }) })
    .bindTooltip(l => l.feature.properties.name)
    .addTo(layerGroup);
  }
}

loadPokestopData();
loadCityLimit();
loadDestinationData();
