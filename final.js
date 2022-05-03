/* 
Slide 1: NYC

Slide 2: BRONX

Slide 3: 10467 ZIPCODE

Slide 4: COMMUNITY DIST 7

Slide 5: CENSUS TRACTS NORWOOD

Slide 6: NORWOOD

*/

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
    showMapData(data);
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

function showSlide(slide) {
  slideTitleDiv.innerHTML = `<h3>${slide.properties.titleSlide}</h3>`;
  slideContentDiv.innerHTML = `<p>${slide.properties.contentSlide}</p>`;
  slideChartDiv.innerHTML = '<p>${slide.properies.chart}</p>';
  
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
  if (currentSlideIndex === 6) {
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
*/