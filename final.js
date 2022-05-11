let map = L.map('map').setView([40.878344,-73.880724], 15); //zoomed to NYC
let layerGroup = L.layerGroup().addTo(map);

//L.marker([40.87369498325355, -73.880724989077587]).addTo(map);
var popup = L.popup()
    .setLatLng([40.87369498325355, -73.880724989077587])
    .setContent('Here is where the Laal Offices are located. <center><img src=laalBaari.png style="width:90px;height:100px;"></center>')
    .openOn(map);

let laalOffice = L.circle([40.87369498325355, -73.880724989077587], {
  color: "red",
  fillColor: "red",
  fillOpacity: "0.3",
  radius: 3
}).addTo(map)

L.tileLayer('https://api.mapbox.com/styles/v1/saisheth/cl1nsj746003g15nz6hd6pqvs/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2Fpc2hldGgiLCJhIjoiY2wwcjJscXdyMmdsbDNlcWt0eWQ3NHh4bCJ9._YM5R9AGKiS7q_v80O8NVQ', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let slides;
let layer;

var myStyle = {
  "color": "red",
  "weight": 2,
  "opacity": 0.25
};

const showMapData = (features) => {
  const layer = L.geoJSON(features, {
    style: myStyle})
    .addTo(map);
  layerGroup.clearLayers();
  layerGroup.addLayer(layer);
};

const fetchMapData = () => {
  fetch('https://raw.githubusercontent.com/sighuh/final-project-template/main/slides.json')
  .then(resp => resp.json())
  .then(data => {
    slides = data;
    showMapData(data);
    showCurrentSlide();
    console.log(data)
  });
}

fetchMapData();

// index slide at 0 and moves i+1 with next page; i-1 with previous page queryselector-links to HTML can use console to look up where the element is 
let currentSlideIndex = 0;
const slideTitleDiv = document.querySelector('.slide-title');
const slideContentDiv = document.querySelector('.slide-content');
const slidePrevButton = document.querySelector('#prev-slide');
const slideNextButton = document.querySelector('#next-slide');
const slideChartDiv = document.querySelector('#story');


//make markers and map layers based on the json file  
function updateMap(features) {
    layerGroup.clearLayers();
    // let featureJson = features.addTo(layerGroup);
    const geoJsonLayer = L.geoJSON(features, { style: myStyle, pointsToLayer: (p, latlng) => L.marker(latlng), onEachFeature: addPopUP})
      .bindTooltip(l => l.feature.properties)
      .addTo(layerGroup);
  
    return geoJsonLayer;
  }  

  //adding popup to each layer- not working
function addTextToDiv(text) {
  const markerPlace = document.querySelector(".marker-position");
  markerPlace.popUpConent = text;
}

function addPopUP (feature, layer) {
  if (feature.properties && feature.properties.popUpContent) {
    layer.bindPopup(feature.properties.popUpContent);
  }
}

function showSlide(slide) {
  slideTitleDiv.innerHTML = `<h3>${slide.properties.titleSlide}</h3>`;
  slideContentDiv.innerHTML = `<p>${slide.properties.contentSlide}</p>`;
  //slideChartDiv.innerHTML = '<p>${slide.properies.chart}</p>';

  updateMap(slide)
  map.eachLayer(marker => {
    if (marker.feature && marker.feature.properties.titleSlide === slide.properties.titleSlide) {
    //map.flyTo(slideNum(), 10);
  };
})
}

function showCurrentSlide() {
  const slide = slides.features[currentSlideIndex];
  showSlide(slide);
      }
  
// moving from slide to slide, iterating through to next, and moving back to previous
function goNextSlide() {
  currentSlideIndex++;
  if (currentSlideIndex === 15) {
      currentSlideIndex = 0;
    }
    showCurrentSlide();
}
    
function goPrevSlide() {
  currentSlideIndex--;
    if (currentSlideIndex < 0) {
      currentSlideIndex = slides.length - 1;
  }
    showCurrentSlide();
}
    
function jumpToSlide() {
  currentSlideIndex = parseInt(slideJumpSelect.value, 10);
  showCurrentSlide();
}

slidePrevButton.addEventListener('click', goPrevSlide);
slideNextButton.addEventListener('click', goNextSlide);

//added legend to the map, added in css
let legend = L.control({position: "bottomleft"});
legend.onAdd = function() {
    let div = L.DomUtil.create("div", "legend");
    div.innerHTML = 
        '<p> Explore city level, census, and Laal community data. Laal is located in the neighborhood of Norwood, the Bronx, NYC.</p><hr>';
    return div;
};
legend.addTo(map);

/*
var census = [
  {
      "name":"Census Tract 425",
      "percent_BA":29.82,
      "n_BA":164,
      "foreignborn_BA":305,
      "total_pop":6248
  },
  {
      "name":"Census Tract 419",
      "percent_BA":14.33,
      "n_BA":104,
      "foreignborn_BA":167,
      "total_pop":6090
  },
  {
      "name":"Census Tract 431.01",
      "percent_BA":10.2,
      "n_BA":81,
      "foreignborn_BA":382,
      "total_pop": 5693
  },
  {
      "name":"Census Tract 423",
      "percent_BA":29.5,
      "n_BA":77,
      "foreignborn_BA":125,
      "total_pop":4033
  },
  {
      "name":"Census Tract 429.02",
      "percent_BA":45,
      "n_BA":45,
      "foreignborn_BA":66,
      "total_pop":3865
  },
  {
      "name":"Census Tract 429.01",
      "percent_BA":68.9,
      "n_BA":528,
      "foreignborn_BA":546,
      "total_pop":3224
  },   
];
*/