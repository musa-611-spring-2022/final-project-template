const registerToggleEl = document.querySelector('.Register');
const registerBtn = document.querySelector('.Register button');
const closeRegisterFormBtns = document.querySelectorAll('.close-register-form');
const registerReportFormEl = document.querySelector('.register-form');
const registerReportStepEls = document.querySelectorAll('.register-step');
const selectLocationStepEl = document.querySelector('.step-select-location');
const selectLocationContinueBtn = document.querySelector('.step-select-location button');
const detailsStepEl = document.querySelector('.step-give-details');
const submitBtn = document.querySelector('.step-give-details button');
const dogRegisterName = document.querySelector('#name');
const dogRegisterEmail = document.querySelector('#email');
const dogRegisterDOB = document.querySelector('#birth-datetime');
const dogRegisterGender = document.querySelector('#gender');
const checkboxes = document.querySelectorAll('#multiAvailabilites input');
let checkboxVals = '';
const checkboxFunct = function () {
  for (let i = 0, n = checkboxes.length; i < n; i++) {
    if (checkboxes[i].checked) {
      checkboxVals += `,${checkboxes[i].id}`;
    }
  }
  if (checkboxVals) checkboxVals = checkboxVals.substring(1);
};
let reportMarker = null;
let reportMarkers = L.layerGroup().addTo(dogMap);
// hide steps
const handlePointSelection = function (evt) {
  if (reportMarker) {
    reportMarkers.removeLayer(reportMarker);
  }
  const clickedPoint = turf.point([
    evt.latlng.lng,
    evt.latlng.lat,
  ]);
  reportMarker = L.marker([
    clickedPoint.geometry.coordinates[1],
    clickedPoint.geometry.coordinates[0],
  ]);
  reportMarker.addTo(reportMarkers);
  selectLocationContinueBtn.disabled = false;
};

const hideAllRegisterSteps = function () {
  for (const stepEl of registerReportStepEls) {
    stepEl.classList.add('hidden');
  }
  dogMap.removeEventListener('click', handlePointSelection);
  reportMarkers.clearLayers();
};
// click register and show registeration form
const openRegisterForm = function () {
  registerToggleEl.classList.add('hidden');
  registerReportFormEl.classList.remove('hidden');
};

// close form
const closeRegisterForm = function () {
  hideAllRegisterSteps();
  registerToggleEl.classList.remove('hidden');
  registerReportFormEl.classList.add('hidden');
};

// reset register form
const resetRegisterForm = function () {
  reportMarkers.clearLayers();
  reportMarker = null;
  selectLocationContinueBtn.disabled = true;
};
// select dog location

const showSelectPointStep = function () {
  openRegisterForm();
  hideAllRegisterSteps();
  dogMap.addEventListener('click', handlePointSelection);
  selectLocationStepEl.classList.remove('hidden');
};

// enter details
const showDetailsStep = function () {
  openRegisterForm();
  hideAllRegisterSteps();
  reportMarker.addTo(reportMarkers);
  detailsStepEl.classList.remove('hidden');
};

// submit registration
const submitIssueReportFormData = function () {
  const dogLatLng = reportMarker.getLatLng();
  const dogData = {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [dogLatLng.lng, dogLatLng.lat],
    },
    properties: {
      Name: dogRegisterName.value,
      Gender: dogRegisterGender.value,
      Availability: checkboxVals,
      DOB: dogRegisterDOB.value,
      Email: dogRegisterEmail.value,
    },
  };
  fetch(`${apiHost}/dogprofiles/`, {
    method: 'post',
    body: JSON.stringify(dogData),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((resp) => resp.json())
    .then((data) => {
      dogFriendLayer.addData(data);
    });
};

// function ensamble
const handleRegistarationBtnClick = function () {
  resetRegisterForm();
  showSelectPointStep();
};

const handleSelectPointContinueBtnClick = function () {
  showDetailsStep();
};

const handleSubmitBtnClick = function () {
  checkboxFunct();
  submitIssueReportFormData();
  resetRegisterForm();
  closeRegisterForm();
};

const handleCloseRegistarationtnClick = function () {
  const confirmation = confirm('You really want to cancel this registaration?');
  if (confirmation) {
    resetRegisterForm();
    closeRegisterForm();
  }
};

// eventlister
registerBtn.addEventListener('click', handleRegistarationBtnClick);
selectLocationContinueBtn.addEventListener('click', handleSelectPointContinueBtnClick);
submitBtn.addEventListener('click', handleSubmitBtnClick);

for (const btn of closeRegisterFormBtns) {
  btn.addEventListener('click', handleCloseRegistarationtnClick);
}
