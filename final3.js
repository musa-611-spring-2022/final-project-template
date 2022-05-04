let map = L.map('map').setView([40.751,-73.798], 9.95); //zoomed to NYC
L.tileLayer('https://api.mapbox.com/styles/v1/saisheth/cl1nsj746003g15nz6hd6pqvs/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2Fpc2hldGgiLCJhIjoiY2wwcjJscXdyMmdsbDNlcWt0eWQ3NHh4bCJ9._YM5R9AGKiS7q_v80O8NVQ', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let slideNumber = 0;
let currentLayer = new L.LayerGroup().addTo(map);

let select = document.getElementById('jump-to-slide');

let slides;

const showMapData = (features) => {
  const layer = L.geoJSON(features);
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

const slideTitleDiv = document.querySelector('.slide-title');
const slideContentDiv = document.querySelector('.slide-content');
const slidePrevButton = document.querySelector('#prev-slide');
const slideNextButton = document.querySelector('#next-slide');
const slideChartDiv = document.querySelector('#story');


function updateSlideTitle(title) {
  document.getElementsByClassName('slide-title')[0].innerHTML = title;
  select.value = slideNumber;
}

function updateSlideContent(content) {
  document.getElementsByClassName('slide-content')[0].innerHTML = content;
}

function updateMapFeatures(features) {
  currentLayer.clearLayers();
  let featureJson = features.addTo(currentLayer);
}


function showSlide(slideNum) {
  updateSlideTitle(slides[slideNum].title);
  updateSlideContent(slides[slideNum].content);
  updateMapFeatures(slides[slideNum].features);
}

function showPreviousSlide() {
  if (slideNumber > 0) {
    slideNumber -= 1;
  } else {
    slideNumber = slides.length - 1;
  }
  showSlide(slideNumber);
}

function showNextSlide() {
  if (slideNumber < slides.length - 1) {
    slideNumber += 1;
  } else {
    slideNumber = 0;
  }
  showSlide(slideNumber);
}

document.getElementById('next-slide').addEventListener('click', showNextSlide);
document.getElementById('prev-slide').addEventListener('click', showPreviousSlide);


slides.forEach((slide, i) => {
  let opt = document.createElement('option');
  opt.value = i;
  opt.innerHTML = slide.title;
  select.appendChild(opt);
});

window.addEventListener('load', () => {
  showSlide(slideNumber);
});
