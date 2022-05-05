const map = L.map('map').setView([39.96, -75.16], 16);

L.tileLayer('https://api.mapbox.com/styles/v1/amyqqlove/cl130k75m003815nk3vae7z14/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYW15cXFsb3ZlIiwiYSI6ImNsMTJ1OGtiZTFvdzMzanJ0cnFmczBjNHoifQ.1r1KE6CdZnEY5wnjt6Pe4g', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);


const zipSelect = document.querySelector('#zipcode-filter');
const companySelect = document.querySelector('#company-filter');
const typeSelect = document.querySelector('#type-filter');
const neighborList = document.querySelector('.neighbors ul');
const addressInput = document.querySelector('#address-input');
const item3 = document.querySelector('.item3');
const searchClick = document.querySelector('#button');

let nearest = document.querySelector('#nearest');
let show = document.querySelector('#showdirection');

const facilityMarkerGroup = L.layerGroup().addTo(map);
const directionLayer = L.geoJSON().addTo(map);
const currentAddressLayer = L.geoJSON().addTo(map);
const inputAddressLayer = L.geoJson().addTo(map);

const neighFeature = neighborData.features;

const mapboxApiToken = 'pk.eyJ1IjoiYW15cXFsb3ZlIiwiYSI6ImNsMTJ1OGtiZTFvdzMzanJ0cnFmczBjNHoifQ.1r1KE6CdZnEY5wnjt6Pe4g';


let data = '';
let geojson = '';


// tracking user's location

let trackingID = null;
let currentAddress = '';

let handlePositionUpdated = (position) => {
  const latlng = [position.coords.latitude, position.coords.longitude];

  // inputAddressLayer.clearLayers();

  let currCircle = L.circleMarker(
    latlng,
    { color: 'blue' },
  ).addTo(currentAddressLayer);
  currCircle.bindPopup('ORIGIN');
  map.panTo(latlng);
  currentAddress = [latlng[1], latlng[0]];
};

let startTracking = () => {
  trackingID = navigator.geolocation.watchPosition(handlePositionUpdated);
  console.log(trackingID);
};

let stopTracking = () => {
  navigator.geolocation.clearWatch(trackingID);
  trackingID = null;
  console.log(trackingID);
  currentAddressLayer.clearLayers();
  directionLayer.clearLayers();
  if (document.querySelector('.direction') !== null) {
    document.querySelector('.direction').remove();
  }
};

const trackingButton = document.querySelector('#trackme');
trackingButton.addEventListener('click', () => {
  if (trackingID === null) {
    currentAddress = '';
    startTracking();
  } else {
    stopTracking();
    currentAddress = '';
  }
});

// end of track. return ** currentAddress ** [lng, lat]



// get the location of input address
// let returnFeature = '';
let inputAddressCoord = '';
let getAddressCoord = () => {
  const inputAddress = addressInput.value;
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${inputAddress}.json?access_token=${mapboxApiToken}`;
  fetch(url)
    .then(resp => resp.json())
    .then(geocoderData => {
      let returnFeature = geocoderData.features[0];
      inputAddressCoord = returnFeature.center;
    });
}; // return [lng, lat]

let focusAddress = () => {
  let startCircle = L.circleMarker(
    [inputAddressCoord[1], inputAddressCoord[0]],
    { color: 'blue' },
  ).addTo(inputAddressLayer);

  startCircle.bindTooltip(addressInput.value).openTooltip();
  map.panTo([inputAddressCoord[1], inputAddressCoord[0]]);
};
// stop of input address





// FIVE NEAREST SHIPPING FACILITIES //

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

function getDistanceFromLatLonInKm(point1, lat2, lon2) {
  let lat1 = point1[1];
  let lon1 = point1[0];
  let R = 6371; // Radius of the earth in km
  let dLat = deg2rad(lat2 - lat1);  // deg2rad below
  let dLon = deg2rad(lon2 - lon1);
  let a = Math.sin(dLat / 2)
  * Math.sin(dLat / 2)
  + Math.cos(deg2rad(lat1))
  * Math.cos(deg2rad(lat2))
  * Math.sin(dLon / 2)
  * Math.sin(dLon / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c; // Distance in km
  return d;
}

let distanceList = [];
let objectList = [];

let getFiveClosetPoints = (point) => {
  distanceList = [];
  objectList = [];
  neighFeature.forEach(neigh => {
    let lon2 = neigh.geometry.coordinates[0];
    let lat2 = neigh.geometry.coordinates[1];
    let objectID = neigh.properties.OBJECTID;
    let dis = getDistanceFromLatLonInKm(point, lat2, lon2);
    distanceList.push([objectID, dis]);
  });

  distanceList.sort((a, b) => a[1] - b[1]);

  const topFive = distanceList.slice(0, 5);
  topFive.forEach(five => {
    objectList.push(five[0]);
  });

  let fiveFeatureList = neighFeature.filter(neigh => neigh.properties.OBJECTID === objectList[0]
    || neigh.properties.OBJECTID === objectList[1]
    || neigh.properties.OBJECTID === objectList[2]
    || neigh.properties.OBJECTID === objectList[3]
    || neigh.properties.OBJECTID === objectList[4]);

  return fiveFeatureList;
};

// END  return features of five closet places;  remember: xxx = getFiveClosestPoints(coords)





//   DIRECTION
// If the checkbox is checked, then show the direction.
// direction available for going to any.

// get the coordinates of the desitination point
// let desCoord = '';
// let getDesCoord = (data) => {
//   desCoord = data.geometry.coordinates;
// }; // [0] is lon, [1] is lat; data is the raw feature data;


// get route
async function getRoute(startPoint, desPoint) {
  let lat1 = startPoint[1];
  let lon1 = startPoint[0];
  let lat2 = desPoint[1];
  let lon2 = desPoint[0];
  let profile = document.querySelector('#profile-filter').value;

  // fetch direction data
  const query = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/${profile}/${lon1},${lat1};${lon2},${lat2}?steps=true&geometries=geojson&access_token=${mapboxApiToken}`,
    { method: 'GET' },
  );

  let json = await query.json();
  data = json.routes[0];
  let route = data.geometry.coordinates;
  geojson = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates: route,
    },
  };
}


let plotDirection = (geoJson, desPoint) => {
  directionLayer.addData(geoJson);
  let desCircle = L.circleMarker(
    [desPoint[1], desPoint[0]],
    { color: 'red' },
  ).addTo(directionLayer);

  desCircle.bindPopup('DESTINATION');
};


let addDirection = (direcData) => {
  item3.innerHTML = '';
  let steps = direcData.legs[0].steps;
  item3.appendChild(htmlToElement('<div class="direction"></div>'));
  let direction = document.querySelector('.direction');
  let tripInstructions = '';
  for (const step of steps) {
    tripInstructions += `<li>${step.maneuver.instruction}</li>`;
  }
  direction.innerHTML = `<p><strong>Trip duration: ${Math.floor(
    direcData.duration / 60,
  )} min </strong></p><ol>${tripInstructions}</ol>`;
};

// Direction End






// SHOW FILTERED LIST  ///

//  get the filtered shipping facilities
let getFilteredFacility = () => {
  let selectedZip = zipSelect.value;
  let selectedCompany = companySelect.value;
  let selectedType = typeSelect.value;

  // first four ifs
  if (selectedZip === '' && selectedCompany === '' && selectedType === '') {
    return neighFeature;
  }
  if (selectedZip === ''  && selectedCompany === '' && selectedType !== '') {
    return neighFeature.filter(nF => nF.properties.TYPE === selectedType);
  }
  if (selectedZip === ''  && selectedCompany !== '' && selectedType === '') {
    return neighFeature.filter(nF => nF.properties.COMPANY === selectedCompany);
  }
  if (selectedZip === ''  && selectedCompany !== '' && selectedType !== '') {
    return neighFeature.filter(nF => nF.properties.COMPANY === selectedCompany
      && nF.properties.TYPE === selectedType);
  }
  // second four ifs
  if (selectedZip !== ''  && selectedCompany === '' && selectedType === '') {
    return neighFeature.filter(nF => nF.properties.ZIP === selectedZip);
  }
  if (selectedZip !== ''  && selectedCompany === '' && selectedType !== '') {
    return neighFeature.filter(nF => nF.properties.ZIP === selectedZip
      && nF.properties.TYPE === selectedType);
  }
  if (selectedZip !== ''  && selectedCompany !== '' && selectedType === '') {
    return neighFeature.filter(nF => nF.properties.ZIP === selectedZip
      && nF.properties.COMPANY === selectedCompany);
  }
  return neighFeature.filter(nF => nF.properties.ZIP === selectedZip
    && nF.properties.COMPANY === selectedCompany
    && nF.properties.TYPE === selectedType);
};

// show marker of the shipping facility

let showFacilityMarker = (center) => {
  facilityMarkerGroup.clearLayers();

  const latlng = [center[1], center[0]];

  L.circleMarker(
    latlng,
    { color: 'red' },
  ).addTo(facilityMarkerGroup);
  map.panTo(latlng);

  // facilityMarkerGroup.addLayer(Feature);
  // const latlng = Feature.getBounds()._southWest;
  // map.panTo(latlng);
};


const handleFacilityListItemClick = function hfl() {
  const neighborListItem = this;
  const address = neighborListItem.querySelector('.neighbor .address').textContent;

  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${mapboxApiToken}`;

  fetch(url)
    .then(resp => resp.json())
    .then(geocoderData => {
      const feature = geocoderData.features[0];
      const center = feature.center;
      showFacilityMarker(center);
    });
};

// list

let initNeighborListItems = (neighData) => {
  let tempList = [];

  neighData.forEach(neighbor => {
    const name = neighbor.properties.NAME;

    const streetName = neighbor.properties.ADDRESS;
    const city = 'Philadelphia';
    const state = 'PA';
    const zip = neighbor.properties.ZIP;
    const address = `${streetName}, ${city}, ${state}, ${zip}`;


    const companyCode = neighbor.properties.COMPANY;

    const facilityType = neighbor.properties.TYPE;

    const neighborListItem = htmlToElement(`
      <li class="neighbor">
        <span class="name">${name}</span>
        <span class="address">${address}</span>
        <span class="party">${companyCode}</span>
        <span class="last-vote-date">${facilityType}</span>
      </li>
    `);

    tempList.push(neighborListItem);

    if (show.checked === false) {
      neighborListItem.addEventListener('click', handleFacilityListItemClick);
    }
  });

  return tempList;
};

let updateNeighborList = (upData) => {
  neighborList.innerHTML = '';

  upData.forEach(neighbor => {
    neighborList.appendChild(neighbor);
  });
};

// add evenlistener of selectors
let facilityToShow = [];
let handleSelectChange = () => {
  if (nearest.checked === false) {
    facilityToShow = getFilteredFacility() || [];
    let tempList  = initNeighborListItems(facilityToShow);
    updateNeighborList(tempList);
  }
};


// searchClick.addEventListener('click', handleSelectChange);

// SHOW FILTERED LIST END //









// Aggregation Operation //



// nearest facilities checkbox is checked ...
// if there is an input address, then list five nearest facilities...
// if there no input address, but there the location function is on, then use current location...
// if both are not available, then pop up a warning window:
// "You should input an address or turn on location function"...

let fiveFeatureList = [];
let returnInput = () => {
  if (nearest.checked === true) {
    fiveFeatureList = [];
    if (document.querySelector('#warning') !== null) {
      document.querySelector('#warning').remove();
    }
    if (addressInput.value !== '') {
      inputAddressLayer.clearLayers();
      // get input address coordinates
      getAddressCoord();
      focusAddress();
      // get five closest points and their features
      fiveFeatureList = getFiveClosetPoints(inputAddressCoord);
      // show those in lists
      let tempList = initNeighborListItems(fiveFeatureList);
      updateNeighborList(tempList);
    } else if (addressInput.value === '' && currentAddress !== '') {
      inputAddressLayer.clearLayers();
      fiveFeatureList = getFiveClosetPoints(currentAddress);
      let tempList = initNeighborListItems(fiveFeatureList);
      updateNeighborList(tempList);
    } else {
      item3.appendChild(htmlToElement("<div id='warning'>You should input an address or turn on the location function!</div>"));
    }
  } else {
    handleSelectChange();
  }
};

// searchClick.addEventListener('click', returnInput);


// direction function aggregation

// filter function: facilityToShow
// nearest function: fiveFeatureList


let directionChecked = () => {
  if (show.checked === true) {
    if (currentAddress !== '' || addressInput.value !== '') {
      let showDirection = (desPoint) => {
        directionLayer.clearLayers();
        plotDirection(geojson, desPoint);
        addDirection(data);
      };

      const directionclick = function dc() {
        const neighborListItem = this;
        const address = neighborListItem.querySelector('.neighbor .address').textContent;
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${mapboxApiToken}`;

        let orgCoord = '';
        if (addressInput.value !== '') {
          // inputAddressLayer.clearLayers();
          getAddressCoord();
          // focusAddress();
          orgCoord = inputAddressCoord;
        } else if (addressInput.value === '' && currentAddress !== '') {
          orgCoord = currentAddress;
        } else {
          orgCoord = '';
        }

        if (orgCoord !== '') {
          fetch(url)
            .then(resp => resp.json())
            .then(geocoderData => {
              let desFeature = geocoderData.features[0];
              let desCoord = desFeature.center;
              getRoute(orgCoord, desCoord);
              showDirection(desCoord);
              // map.panTo([orgCoord[1], orgCoord[0]]);
              map.fitBounds([
                [orgCoord[1], orgCoord[0]],
                [desCoord[1], desCoord[0]],
              ]);
            });
        }
      };

      let removeEvent = () => {
        document.querySelectorAll('.neighbor').forEach(neighbor => {
          neighbor.removeEventListener('click', handleFacilityListItemClick);
        });
      };

      let showInstructions = () => {
        document.querySelectorAll('.neighbor').forEach(neighbor => {
          neighbor.addEventListener('click', directionclick);
        });
      };

      removeEvent();
      showInstructions();

      // let orgCoord = '';
      if (addressInput.value !== '') {
        inputAddressLayer.clearLayers();
        getAddressCoord();
        focusAddress();
        // orgCoord = inputAddressCoord;
      }
      // } else if (addressInput.value === '' && currentAddress !== '') {
      //   orgCoord = currentAddress;
      // } else {
      //   orgCoord = '';
      // }
    } else {
      console.log('why');
      item3.appendChild(htmlToElement("<div id='warning'>You should input an address or turn on the location function!</div>"));
    }
  } else if (document.querySelector('.direction') !== null) {
    document.querySelector('.direction').remove();
  }
};

// show.addEventListener('change', directionChecked)
// searchClick.addEventListener('click', directionChecked);


// clear other layes except map when click search button

let clearLayers = () => {
  directionLayer.clearLayers();
  facilityMarkerGroup.clearLayers();
  if (addressInput.value === '') {
    inputAddressLayer.clearLayers();
  }
  if (currentAddress === '') {
    currentAddressLayer.clearLayers();
  }
};



// add warning and remove warining

let addWarining = () => {
  if ((nearest.checked === false && show.checked === false) || (addressInput.value !== '' || currentAddress !== '')) {
    if (document.querySelector('#warning') !== null) {
      document.querySelector('#warning').remove();
    }
  } else if ((nearest.checked === true || show.checked === true) && (addressInput.value === '' && currentAddress === '')) {
    if (document.querySelector('#warning') === null) {
      item3.appendChild(htmlToElement("<div id='warning'>You should input an address or turn on the location function!</div>"));
    }
  }
};

let allClickFunc = () => {
  returnInput();
  directionChecked();
  clearLayers();
  addWarining();
};

searchClick.addEventListener('click', allClickFunc);







