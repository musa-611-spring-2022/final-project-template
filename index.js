const dogMap = L.map('dog-map', { scrollWheelZoom: false }).setView([40.72995787857809, -73.99271702327988], 13);
const layerGroup = L.layerGroup().addTo(dogMap);
const dogFriendGroup = L.layerGroup().addTo(dogMap);
const dogLicenseGroup = L.layerGroup().addTo(dogMap);
const apiHost = 'http://localhost:3000';

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 20,
}).addTo(dogMap);

const dogLicensesBoundSmall = [
  [40.70250, -74.02656],
  [40.70250, -73.93524],
  [40.79509, -73.93524],
  [40.79509, -74.02656],
  [40.70250, -74.02656],
];

const petStoresBound = [
  [40.660847697284815, -74.0478515625],
  [40.660847697284815, -73.87859344482422],
  [40.823682398765996, -73.87859344482422],
  [40.823682398765996, -74.0478515625],
  [40.660847697284815, -74.0478515625],
];

const dogHotelBounds = [
  [40.714, -74.0073280933],
  [40.773, -73.9206361999],
];

const animalHospitalBounds = [
  [40.7031292689, -74.0570662503],
  [40.8139130645, -73.9371156908],
];

const getAnimalsBounds = [
  [40.5011687095, -73.8612555110],
  [40.9464315094, -73.7092844494],
];
/* Slide 3 */
/* show the dog breeds */

const dogLicensesStyle = {
  color: '#FFD000',
  fillColor: '#FFD000',
  fillOpacity: 0.5,
};

const updatedogLicensesMarkers = (dogLicenses) => {
  /* celar layer  */
  layerGroup.clearLayers();
  dogLicenseGroup.clearLayers();
  /* fly to bounds  */
  dogMap.flyToBounds(dogLicensesBoundSmall);
  /* Loop each dog store to plot it */
  dogLicenses.forEach((dogLicense) => {
    let lng = dogLicense.geometry.coordinates[0];
    let lat = dogLicense.geometry.coordinates[1];
    const circleMarker = L.circle([lat, lng], 40, dogLicensesStyle)
      .bindTooltip(dogLicense.properties.GEOID.toString())
      .addTo(layerGroup);
    const dogLicensesGEOID = dogLicense.properties.GEOID.toString();
    /* Add event listener */
    circleMarker.addEventListener('click', () => {
      zipCodeBoundary(dogLicense.properties.GEOID);
      circleMarker.bindPopup(
        `<h6>${dogLicensesGEOID}</h6>
        <ul>
        <li>Total Numer: ${dogLicense.properties.count.toString()} </li>
        <li>Age: ${dogLicense.properties.Age.toString()} </li>
        <li>Female %: ${dogLicense.properties.Femalperc.toString()} </li>
        <li>Male %: ${dogLicense.properties.Maleperc.toString()} </li></ul>`,
      ).openPopup();
    });
  });
};

const zipCodeBoundary = (zipcode) => {
  dogLicenseGroup.clearLayers();
  const dataUrl = `data/zipcodePoly/${zipcode}.geojson`;
  $.getJSON(dataUrl, (data) => {
    const dogLicensesPoly = L.geoJson(data, dogLicensesStyle).addTo(dogLicenseGroup)
      .addEventListener('click', () => {
        dogLicenseGroup.clearLayers();
        if (zipcode !== 98363) {
          updatedogLicensesMarkers(dogLicenses);
        } else updatedogLicensesFarest(dogLicenses);
      });
    dogMap.flyToBounds(dogLicensesPoly.getBounds());
  });
};

$('#form1').submit((e) => {
  e.preventDefault();
  const selectZipcodeElement = document.getElementById('zipcodeTypeIn');
  let selectZipcode = selectZipcodeElement.value;
  if (selectZipcode === 'all') {
    updatedogLicensesMarkers(dogLicenses);
  } else zipCodedogLicenses(selectZipcode);
});

let zipCodedogLicenses = (selectZipcode) => {
  /* celar layer  */
  layerGroup.clearLayers();
  /* Loop each dog store to plot it */
  dogLicenses.forEach((dogLicense) => {
    if (dogLicense.properties.GEOID.toString() === selectZipcode) {
      let lat = dogLicense.geometry.coordinates[1];
      let lng = dogLicense.geometry.coordinates[0];
      const circleMarker = L.circle([lat, lng], 40, dogLicensesStyle)
        .bindTooltip(dogLicense.properties.GEOID.toString())
        .addTo(layerGroup);
      const dogLicensesGEOID = dogLicense.properties.GEOID.toString();
      zipCodeBoundary(dogLicense.properties.GEOID);
      circleMarker.bindPopup(
        `<h6>${dogLicensesGEOID}</h6>
        <ul>
        <li>Total Numer: ${dogLicense.properties.count.toString()} </li>
        <li>Age: ${dogLicense.properties.Age.toString()} </li>
        <li>Female %: ${dogLicense.properties.Femalperc.toString()} </li>
        <li>Male %: ${dogLicense.properties.Maleperc.toString()} </li></ul>`,
      ).openPopup();
    }
  });
};
/* Slide 4 */
let updatedogLicensesFarest = (dogLicenses) => {
  /* FIND THE farrest ONE */
  dogLicenses.forEach((dogLicense) => {
    if (dogLicense.properties.GEOID === 98363) {
      const farestLicense = dogLicense;
      /* celar layer  */
      layerGroup.clearLayers();
      /* fly to bounds  */
      let lat = farestLicense.geometry.coordinates[1];
      let lng = farestLicense.geometry.coordinates[0];
      const dogLicensesBound = L.latLng(lng, lat);
      dogMap.flyToBounds(dogLicensesBound.toBounds(100000));
      /* PLOT IT  */
      zipCodeBoundary(dogLicense.properties.GEOID);
      const circleMarker = L.circle([lat, lng], 40, dogLicensesStyle)
        .bindTooltip(farestLicense.properties.GEOID.toString())
        .addTo(layerGroup);
      const dogLicensesGEOID = farestLicense.properties.GEOID.toString();
      circleMarker.bindPopup(
        `<h6>${dogLicensesGEOID}</h6>
        <ul>
        <li>Total Numer: ${farestLicense.properties.count.toString()} </li>
        <li>Age: ${farestLicense.properties.Age.toString()} </li>
        <li>Female %: ${farestLicense.properties.Femalperc.toString()} </li>
        <li>Male %: ${farestLicense.properties.Maleperc.toString()} </li></ul>`,
      ).openPopup();
    }
  });
};

/* Slide 1 */
/* show the dog runs */

const dogRunsStyle = {
  color: '#ff7800',
  weight: 5,
  opacity: 0.65,
};

const dogRunsBtn = document.querySelector('.dogRunsMap button');

const dogRunBound = [
  [40.499703081749566, -74.25521850585938],
  [40.901576859936284, -73.83087158203125],
];

const weatherInfo = document.querySelector('#weatherInfo');
const weatherApiKey = '2c441729b4e371a2722f9ea5913ae21a';
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=40.76556538211533&lon=-73.96458151137222&appid=${weatherApiKey}`)
  .then((response) => response.json())
  .then((data) => {
    const NYCtemperature = `${Math.round((data.main.temp - 273.15) * (9 / 5) + 32).toString()} Fahrenheit`;
    const NYChumidity = `${data.main.humidity.toString()} %`;
    const NYCwind = `${data.wind.speed.toString()} meter/sec`;
    weatherInfo.innerHTML = `
    <strong>Today's Weather</strong>
    <br>
    Temperature: ${NYCtemperature}
    <br>
    Humidity: ${NYChumidity}
    <br>
    Wind Speed: ${NYCwind}
    `;
  });

const updateDogRunsMarkers = () => {
  /* celar layer  */
  layerGroup.clearLayers();
  /* fly to bounds  */
  dogMap.flyToBounds(dogRunBound);
  /* Loop each dog run to plot it */
  dogRuns.forEach((dogRun) => {
    const dogRunpolygon = L.geoJSON([dogRun], { style: dogRunsStyle })
      .bindTooltip(
        `<h6>${dogRun.properties.name}</h6>
        <ul>
          <li>Zipcode:${dogRun.properties.zipcode} </li>
          <li>Area: ${Math.round(dogRun.properties.area)} sqm</li>
        </ul>`,
      ).addTo(layerGroup);
    /* Add event listener */
    dogRunpolygon.addEventListener('click', () => {
      dogMap.flyToBounds(dogRunpolygon.getBounds());
      dogRunpolygon.bindPopup(
        `<h6><strong>&#127795 ${dogRun.properties.name}</strong></h6>
        <ul>
          <li><strong>Zipcode:</strong>${dogRun.properties.zipcode} </li>
          <li><strong>Area:<strong> ${Math.round(dogRun.properties.area)} sqm</li>
          <li><a href='https://www.google.com/search?q=${dogRun.properties.name}' target='_blank'><strong>More Info</strong></a></li>
        </ul>`,
      ).openPopup();
    });
  });
};
dogRunsBtn.addEventListener('click', updateDogRunsMarkers);

/* Slide 2 */
const updateDogRunsBiggest = (dogRuns) => {
  /* FIND THE BIGGEST ONE */
  dogRuns.forEach((dogRun) => {
    if (dogRun.properties.name === 'Rockaway Freeway Dog Park') {
      const biggestDogRun = dogRun;
      /* celar layer  */
      layerGroup.clearLayers();
      /* fly to bounds  */
      const dogRunBoundbiggest = L.geoJSON([biggestDogRun], { style: dogRunsStyle });
      dogMap.flyToBounds(dogRunBoundbiggest.getBounds().pad(0.75));
      /* PLOT IT  */
      const dogRunpolygon = L.geoJSON([biggestDogRun], { style: dogRunsStyle })
        .bindTooltip(biggestDogRun.properties.name)
        .addTo(layerGroup);
      /* Add event listener */
      dogRunpolygon.addEventListener('click', () => {
        dogRunpolygon.bindPopup(
          `<h6><strong>&#127795 ${dogRun.properties.name}</strong></h6>
          <ul>
            <li><strong>Zipcode:</strong>${dogRun.properties.zipcode} </li>
            <li><strong>Area:<strong> ${Math.round(dogRun.properties.area)} sqm</li>
            <li><a href='https://www.google.com/search?q=${dogRun.properties.name}' target='_blank'><strong>More Info</strong></a></li>
          </ul>`,
        ).openPopup();
      });
    }
  });
};

/* Slide 5 */
/* show the pet store */

const petStoreStyle = {
  color: '#EF6190',
  fillColor: '#EF6190',
  fillOpacity: 0.5,
};

const updatePetStoresMarkers = (petStores) => {
  /* celar layer  */
  layerGroup.clearLayers();
  /* fly to bounds  */
  dogMap.flyToBounds(petStoresBound);
  /* Loop each dog store to plot it */
  petStores.forEach((PetStore) => {
    const circleMarker = L.circle([PetStore.lat, PetStore.lon], 100, petStoreStyle)
      .bindTooltip(PetStore.tags.name)
      .addTo(layerGroup);
    /* Add event listener */
    circleMarker.addEventListener('click', () => {
      circleMarker.bindPopup(
        `<b>${PetStore.tags.name}</b>
        <br>
        ${JSON.stringify(PetStore.tags)
    .replace('{', '')
    .replace('}', '')
    .replaceAll('"', '')
    .replaceAll('addr:', '')
    .replaceAll(':', ': ')
    .replaceAll(',', '<br>')
    .toUpperCase()},`,
      ).openPopup();
    });
  });
};

/* Slide 6 */
/* show the pet hotels */

const dogHotelStyle = {
  color: '#1e1e1e',
  fillColor: '#fed500',
  fillOpacity: 0.3,
};

const updatedogHotelMarkers = (dogHotels) => {
  /* celar layer  */
  layerGroup.clearLayers();
  const starCode = '&#11088 ';
  /* fly to bounds  */
  dogMap.flyToBounds(dogHotelBounds);
  /* Loop each dog store to plot it */
  dogHotels.forEach((dogHotel) => {
    if (dogHotel.rating == null) {
      dogHotel.rating = 'No Record';
      dogHotel.starNum = starCode.repeat(0);
    } else {
      dogHotel.starNum = starCode.repeat(Math.floor(dogHotel.rating));
    }
    if (dogHotel.user_ratings_total == null) { dogHotel.user_ratings_total = 'No Record'; }
    const circleMarker = L.circle([
      dogHotel.geometry.location.lat, dogHotel.geometry.location.lng
    ], 40, dogHotelStyle)
      .bindTooltip(dogHotel.name)
      .addTo(layerGroup);
    /* Add event listener */
    circleMarker.addEventListener('click', () => {
      circleMarker.bindPopup(
        `
        <h6><strong>&#127976 ${dogHotel.name}</strong></h6>
        <ul>
          <li><strong>Overall Rating:</strong> ${dogHotel.rating.toString()} ${dogHotel.starNum} </li>
          <li><strong>Number of Ratings:</strong> ${dogHotel.user_ratings_total.toString()}</li>
          <li><strong>Address:</strong> ${dogHotel.formatted_address}</li>
          <li><a href='https://www.google.com/travel/hotels/${dogHotel.name}' target='_blank'><strong>Booking Now!</strong></a></li>
        </ul>
        `,
      ).openPopup();
    });
  });
};
/* Slide 7 */
/* show the animal hospital */

const animalHospitalStyle = {
  color: '#73c471',
  fillColor: '#fed500',
  fillOpacity: 0.3,
};

const updateanimalHospitalMarkers = (animalHospitals) => {
  /* celar layer  */
  layerGroup.clearLayers();
  const starCode = '&#11088 ';
  /* fly to bounds  */
  dogMap.flyToBounds(animalHospitalBounds);
  /* Loop each dog store to plot it */
  animalHospitals.forEach((animalHospital) => {
    navigator.geolocation.getCurrentPosition((position) => {
      animalHospital.Mylocationlat = position.coords.latitude;
      animalHospital.Mylocationlng = position.coords.longitude;
    });
    if (animalHospital.rating == null) {
      animalHospital.rating = 'No Record';
      animalHospital.starNum = starCode.repeat(0);
    } else {
      animalHospital.starNum = starCode.repeat(Math.floor(animalHospital.rating));
    }
    if (animalHospital.user_ratings_total == null) { animalHospital.user_ratings_total = 'No Record'; }
    const circleMarker = L.circle([
      animalHospital.geometry.location.lat, animalHospital.geometry.location.lng
    ], 40, animalHospitalStyle)
      .bindTooltip(animalHospital.name)
      .addTo(layerGroup);
    /* Add event listener */
    circleMarker.addEventListener('click', () => {
      circleMarker.bindPopup(
        `
        <h6><strong>&#127973 ${animalHospital.name}</strong></h6>
        <ul>
          <li><strong>Overall Rating:</strong> ${animalHospital.rating.toString()} ${animalHospital.starNum} </li>
          <li><strong>Number of Ratings:</strong> ${animalHospital.user_ratings_total.toString()}</li>
          <li><strong>Address:</strong> ${animalHospital.formatted_address}</li>
          <li><a href='https://www.google.com/maps/dir/${animalHospital.formatted_address}/${animalHospital.Mylocationlat},${animalHospital.Mylocationlng}/' target='_blank'><strong>See a Vet Now!</strong></a></li>
        </ul>
        `,
      ).openPopup();
    });
  });
};
/* Slide 8 */
/* Get a dog */

const breederStyle = {
  color: '#FFD000',
  fillColor: '#FFD000',
  fillOpacity: 0.5,
};
const resequeStyle = {
  color: '#EF6190',
  fillColor: '#EF6190',
  fillOpacity: 0.5,
};

const legend = L.control({ position: 'bottomleft' });
legend.onAdd = function (map) {
  const div = L.DomUtil.create('div', 'legend');
  div.innerHTML += '<center><h6>Legend</h6></center>';
  div.innerHTML += '<i style="background: #FFD000"></i>Breeder<br>';
  div.innerHTML += '<i style="background: #EF6190"></i>Rescue<br>';
  return div;
};

const updateanimalGetMarkers = (getAnimals) => {
  /* celar layer  */
  layerGroup.clearLayers();
  dogFriendGroup.clearLayers();
  const starCode = '&#11088 ';
  /* fly to bounds  */
  dogMap.flyToBounds(getAnimalsBounds);
  legend.addTo(dogMap);
  /* Loop each dog store to plot it */
  getAnimals.forEach((getAnimal) => {
    if (getAnimal.rating == null) {
      getAnimal.rating = 'No Record';
      getAnimal.starNum = starCode.repeat(0);
    } else {
      getAnimal.starNum = starCode.repeat(Math.floor(getAnimal.rating));
    }
    if (getAnimal.user_ratings_total === null) { getAnimal.user_ratings_total = 'No Record'; }
    if (getAnimal.tag === 'Breeder') {
      const circleMarker = L.circle([
        getAnimal.geometry.location.lat, getAnimal.geometry.location.lng
      ], 200, breederStyle)
        .bindTooltip(getAnimal.name)
        .addTo(layerGroup);
      /* Add event listener */
      circleMarker.addEventListener('click', () => {
        circleMarker.bindPopup(
          `
          <h6><strong>&#128021 ${getAnimal.name}</strong></h6>
          <ul>
            <li><strong>${getAnimal.tag}</strong></li>
            <li><strong>Overall Rating:</strong> ${getAnimal.rating.toString()} ${getAnimal.starNum} </li>
            <li><strong>Number of Ratings:</strong> ${getAnimal.user_ratings_total.toString()}</li>
            <li><strong>Address:</strong> ${getAnimal.formatted_address}</li>
            <li><a href='https://www.google.com/search?q=${getAnimal.name}' target='_blank'>More Info</a></li>
          </ul>
          `,
        ).openPopup();
      });
    } else {
      const circleMarker = L.circle([
        getAnimal.geometry.location.lat, getAnimal.geometry.location.lng
      ], 200, resequeStyle)
        .bindTooltip(getAnimal.name)
        .addTo(layerGroup);
      /* Add event listener */
      circleMarker.addEventListener('click', () => {
        circleMarker.bindPopup(
          `
          <h6><strong>&#127973 ${getAnimal.name}</strong></h6>
          <ul>
            <li><strong>${getAnimal.tag}</strong></li>
            <li><strong>Overall Rating:</strong> ${getAnimal.rating.toString()} ${getAnimal.starNum} </li>
            <li><strong>Number of Ratings:</strong> ${getAnimal.user_ratings_total.toString()}</li>
            <li><strong>Address:</strong> ${getAnimal.formatted_address}</li>
            <li><a href='https://www.google.com/search?q=${getAnimal.name}' target='_blank'>More Info</a></li>
          </ul>
          `,
        ).openPopup();
      });
    }
  });
};
/* Slide 9 */
/* show the dog dating */
const icon = L.icon({
  iconUrl: 'dogPin.png',
  iconSize: [30, 45],
  iconAnchor: [15, 45],
});

let dogFriendLayer = null;
const loadDogFile = function () {
  fetch(`${apiHost}/dogprofiles/`)
    .then((resp) => resp.json())
    .then((data) => {
      dogMap.flyToBounds(animalHospitalBounds);
      dogFriendLayer = L.geoJSON(data, {
        pointToLayer: (feature, latlng) => {
          return L.marker(latlng, { icon })
            .bindTooltip(feature.properties.Name)
            .bindPopup(
              `<ul>
                <li>&#128054 Name: ${feature.properties.Name}</li>
                <li>Gender: ${feature.properties.Gender}</li>
                <li>Date of Birth: ${feature.properties.DOB}</li>
                <li>Contat: ${feature.properties.Email}</li>
                <li>Availability: ${feature.properties.Availability}</li>
              </ul>`,
            ).openPopup();
        },
      });
      dogFriendLayer.addTo(dogFriendGroup);
    });
};

/* current slide index */
let currentSlideIndex = -1;

const slideDivs = document.getElementsByClassName('slide');

function calcCurrentSlideIndex() {
  const scrollPos = window.scrollY + window.innerHeight;
  let i;
  for (i = 0; i < (slideDivs.length); i++) {
    const slidePos = slideDivs[i].offsetTop;
    if (slidePos > scrollPos) {
      break;
    }
  }
  i--;
  if (i !== currentSlideIndex) {
    // changing
    currentSlideIndex = i;
    if (currentSlideIndex === 0) {
      layerGroup.clearLayers();
      init();
    } else {
      cancelAnimationFrame(animationFrame);
      if (currentSlideIndex === 1) {
        updateDogRunsMarkers(dogRuns);
      } else if (currentSlideIndex === 2) {
        updateDogRunsBiggest(dogRuns);
      } else if (currentSlideIndex === 3) {
        updatedogLicensesMarkers(dogLicenses);
      } else if (currentSlideIndex === 4) {
        updatedogLicensesFarest(dogLicenses);
      } else if (currentSlideIndex === 5) {
        updatePetStoresMarkers(petStores);
      } else if (currentSlideIndex === 6) {
        updatedogHotelMarkers(dogHotels);
      } else if (currentSlideIndex === 7) {
        legend.remove(dogMap);
        updateanimalHospitalMarkers(animalHospitals);
      } else if (currentSlideIndex === 8) {
        updateanimalGetMarkers(getAnimals);
      } else if (currentSlideIndex === 9) {
        layerGroup.clearLayers();
        legend.remove(dogMap);
        loadDogFile();
      }
    }
  }
}

/* initial function */
init();
calcCurrentSlideIndex();
document.addEventListener('scroll', calcCurrentSlideIndex);
