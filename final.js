let map = L.map('map').setView([40.751,-73.798], 9.95); //zoomed to NYC
let layerGroup = L.layerGroup().addTo(map);

L.tileLayer('https://api.mapbox.com/styles/v1/saisheth/cl1nsj746003g15nz6hd6pqvs/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2Fpc2hldGgiLCJhIjoiY2wwcjJscXdyMmdsbDNlcWt0eWQ3NHh4bCJ9._YM5R9AGKiS7q_v80O8NVQ',
{}).addTo(map);

let showMapData;
let points;

const fetchMapData = () => {
  fetch('https://raw.githubusercontent.com/sighuh/final-project-template/blob/main/slides.json')
  .then(resp => resp.json())
  .then(data => {
    L.geoJSON(data);
    .bindTooltip(layer => (
      let title = layer.feature.properties.title;
      let content = layer.feature.properties.content;
      return 'Title: ${title<br>Content: ${content}';
    })
    .addTo(map);
    showCurrentSlide();
    console.log(data) 
  });

fetchMapData();

// index slide at 0 and moves i+1 with next page; i-1 with previous page queryselector-links to HTML can use console to look up where the element is 
let currentSlideIndex = 0;
const slideTitleDiv = document.querySelector('.slide-title');
const slideContentDiv = document.querySelector('.slide-content');
const slidePrevButton = document.querySelector('#prev-slide');
const slideNextButton = document.querySelector('#next-slide');
const slideJumpSelect = document.querySelector('#jump-to-slide');

//make markers and map layers based on the json file  
function updateMap(collection) {
    layerGroup.clearLayers();
    const geoJsonLayer = L.geoJSON(features, { pointToLayer: (p, latlng) => L.marker(latlng) })
      .bindTooltip(l => l.feature.properties)
      .addTo(layerGroup);
  
    return geoJsonLayer;
  }

  function dataCollection(slide_number) {
    return {
      type: 'FeatureCollection',
      features: slideToShow.features.filter(f => f.properties.slide === slide_number),
    };
  }

function showSlide(slide) {
  slideTitleDiv.innerHTML = `<h3>${slide.properties.title}</h3>`;
  slideContentDiv.innerHTML = `<p>${slide.properties.content}</p>`
  
  map.eachLayer(marker => {
    if (marker.feature && marker.feature.properties.title === slide.properties.title) {
    map.flyTo(marker.getLatLng(), 10);
    }

function showCurrentSlide() {
  const slide = points.features[currentSlideIndex];
  showSlide(slide);
      }
  
// moving from slide to slide, iterating through to next, and moving back to previous
function goNextSlide() {
  currentSlideIndex++;
  if (currentSlideIndex === 23) {
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

//setting the initial slide and what it will display-linking to HTML
function initSlideSelect() {
  slideJumpSelect.innerHTML = ''; 
  for (const [index, slide] of slides.entries()) {
    const option = document.createElement('option');
    option.value = index;
    option.innerHTML = slide.title;
    slideJumpSelect.appendChild(option);
    }
}

/*
slidePrevButton.addEventListener('click', goPrevSlide);
slideNextButton.addEventListener('click', goNextSlide);
slideJumpSelect.addEventListener('click', jumpToSlide);

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

// Display a point marker with pop-up text
L.marker([41.77, -72.69]).addTo(map) // EDIT marker coordinates
.bindPopup("Insert pop-up text here"); // EDIT pop-up text message
*/
