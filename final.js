let map = L.map('map').setView([40.751,-73.798], 9.95); //zoomed to NYC
let layerGroup = L.layerGroup().addTo(map);

L.tileLayer('https://api.mapbox.com/styles/v1/saisheth/cl1nsj746003g15nz6hd6pqvs/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2Fpc2hldGgiLCJhIjoiY2wwcjJscXdyMmdsbDNlcWt0eWQ3NHh4bCJ9._YM5R9AGKiS7q_v80O8NVQ', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let points;

const showMapData = (features) => {
  const layer = L.geoJSON(features);
  layerGroup.clearLayers();
  layerGroup.addLayer(layer);
};

const fetchMapData = () => {
  fetch('https://raw.githubusercontent.com/sighuh/final-project-template/main/slides.json')
  .then(resp => resp.json())
  .then(data => {
    points = data;
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
function updateMap(collection) {
    layerGroup.clearLayers();
    const geoJsonLayer = L.geoJSON(features, { pointToLayer: (p, latlng) => L.marker(latlng) })
      .bindTooltip(l => l.feature.properties)
      .addTo(layerGroup);
  
    return geoJsonLayer;
  }

  function dataCollection(data) {
    return {
      type: 'FeatureCollection',
      features: slideToShow.features.filter(f => f.properties.slideNum === slideNum),
    };
  }
  let slideToShow = { features: [] };  

function showSlide(slide) {
  slideTitleDiv.innerHTML = `<h3>${slide.properties.titleSlide}</h3>`;
  slideContentDiv.innerHTML = `<p>${slide.properties.contentSlide}</p>`;
  //slideChartDiv.innerHTML = '<p>${slide.properies.chart}</p>';
  
  map.eachLayer(marker => {
    if (marker.feature && marker.feature.properties.title === slide.properties.title) {
    map.flyTo(marker.getLatLng(), 10);
      marker
        .bindPopup(`<h3>${slide.properties.popUpContent}</h3>`)
        .openPopup();
    } else {
      marker.closePopup();
  };
})
}

function showCurrentSlide() {
  const slide = points.features[currentSlideIndex];
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
/*
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

//add an icon--need to get rest of code from webpage
marker.bindPopup(popupContent).openPopup();


//add image overlay
var imageUrl = 'https://maps.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
    imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
L.imageOverlay(imageUrl, imageBounds).addTo(map);

//add laal as map marker

//small text over map layer
marker.bindTooltip("my tooltip text").openTooltip();

*/

//added legend to the map, added in css
let legend = L.control({position: "bottomleft"});
legend.onAdd = function() {
    let div = L.DomUtil.create("div", "legend");
    div.innerHTML = 
        '<p><b>Simple shapes in Leaflet</b></p><hr>' +
        '<p>This map shows an example of adding shapes ' + 
        'on a Leaflet map</p>' +
        'The line layer has a <b>popup</b>. ' + 
        'Click on the line to see it!<hr>';
    return div;
};
legend.addTo(map);
