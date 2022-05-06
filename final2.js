let map = L.map('map').setView([40.751,-73.798], 9.95); //zoomed to NYC
let layerGroup = L.layerGroup().addTo(map);

L.tileLayer('https://api.mapbox.com/styles/v1/saisheth/cl1nsj746003g15nz6hd6pqvs/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2Fpc2hldGgiLCJhIjoiY2wwcjJscXdyMmdsbDNlcWt0eWQ3NHh4bCJ9._YM5R9AGKiS7q_v80O8NVQ', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//popup on initial map
var popup = L.popup()
    .setLatLng([40.87369498325355, -73.880724989077587])
    .setContent('<center><img src=laalBaari.png style="width:90px;height:100px;"></center>')
    .openOn(map);

// data setup, defining variables
var dataset = 'https://raw.githubusercontent.com/sighuh/final-project-template/main/slides.json';
var datum;
var featureGroup;

// loading in dataset 
dataset = fetch('https://raw.githubusercontent.com/sighuh/final-project-template/main/slides.json')
  .then(resp => resp.json())
  .then(data => {
      dataset=L.geoJSON(data, {style: myStyle})
      buildPage(data,0);
      $('#prev').prop("disabled",true)
      datum = data
  });

//making the outline red
var myStyle = {
    "color": "red",
    "weight": 2,
    "opacity": 0.25
  };

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

//contents of slides
var page1 = {
    title: "NYC",
    content: "Bangladeshis are one of the fastest growing immigrant communities in NYC and the poorest compared to other Asian ethnic communities. According to a 2022 report by DOHMH on AAPI Health, 58% of Bangladeshi's in NYC earn an income 200% below the federal poverty level and Bangladeshi households in NYC are the most rent burdened of AAPI New Yorkers, 70% pay over 30% of their income on housing.Like most immigrant communities, this population faces a range of economic and social stressors, including financial strains, discrimination, inadequate housing, and social isolation.",
    filter: function(feature) {return feature.properties.titleSlide === "NYC"},
    style: myStyle,
    bbox:[[40.428592,-74.628754],[41.126372,-73.243103]],
}

var page2 = {
    title: "Bronx",
    content: "The Bronx is home to a large Bangladeshi community, mostly located in Parkchester, Grand Concourse and Norwood. Recent ACS data (2016-2020) estimated 14,918 foreign born Bangladeshis and 10,891 US-born Bangladeshis.",
    filter: function(feature) {return feature.properties.titleSlide === "Bronx, NYC"},
    style: myStyle,
    bbox:[[40.755174,-74.034462],[40.929451,-73.688049]],
}

var page3 = {
    title: "Community District 7",
    content: "Community District 7 includes Bedford Park, Fordham North, and Norwood. Nearly 44.5% of residents are foriegn-born (ACS 2014-18).",
    filter: function(feature) {return feature.properties.titleSlide === "Community District 7"},
    style: myStyle,
    bbox:[[40.849166,-73.937674],[40.892717,-73.851070]],
}

var page4 = {
    title: "Census Tract",
    content: ".",
    filter: function(feature) {return feature.properties.titleSlide === "Census Tract"},
    style: myStyle,
    bbox:[[40.865078,-73.900666],[40.886851,-73.857365]],

}

var page5={
    title: "Census Tract",
    content: ".",
    filter: function(feature) {return feature.properties.titleSlide === "Census Tract"},
    style: myStyle,
    bbox:[[40.865078,-73.900666],[40.886851,-73.857365]]

}

var page6={
    title: "Census Tract",
    content: ",.",
    filter: function(feature) {return feature.properties.titleSlide === "Census Tract"},
    style: myStyle,
    bbox:[[40.865078,-73.900666],[40.886851,-73.857365]]

}

var page7={
    title: "Norwood",
    content: "data and text.",
    filter: function(feature) {return feature.properties.titleSlide === "Norwood"},
    style: myStyle,
    bbox:[[40.865078,-73.900666],[40.886851,-73.857365]]

}

// moving through slides
var slides = [page1, page2, page3, page4, page5, page6, page7];
var currentPage = 0;

// next page button
var nextPage = function(){
    $('#prev').prop("disabled",false) //make sure the other button is enabled

    tearDown()
    var nextPage = currentPage + 1
    currentPage = nextPage
    console.log(currentPage)
    buildPage(datum, currentPage)

    if(currentPage === slides.length -1){
        $('#next').prop("disabled",true)
    }
}

// previous page button
var previousPage = function(){
    $('#next').prop("disabled",false)

    tearDown()
    var prevPage = currentPage - 1
    currentPage = prevPage
    console.log(currentPage)
    buildPage(datum, currentPage)

    if(currentPage === 0){
        $('#prev').prop("disabled",true)
    }
}

//change title, change content, move to the bounding box.
var buildPage = function(data, pageId){
    //add features to map
    featureGroup = L.geoJson(data, {
      style: slides[pageId].style,
      filter: slides[pageId].filter
    }).addTo(map);

    featureGroup.eachLayer(eachFeatureFunction);

    //change title and content
    $('#title').text(slides[pageId].title)
    $('#content').text(slides[pageId].content)
    if(slides[pageId].bbox !== undefined){
        map.flyToBounds(slides[pageId].bbox)
    }


}

var tearDown = function(){
    //remove all previously plotted data to build next page
    featureGroup.remove();
}

var myStyle = function(feature) {
  return {};
};

var eachFeatureFunction = function(layer) {
    layer.bindPopup(
        'geometry ' + layer.feature.properties.geometry +
        '<br> Number of CBOs ' + layer.feature.properties.titleSlide)
  layer.on('click', function (event) {
    console.log(layer.feature);

    // +

  });
};

// display buttons
$('#next').click(nextPage)
$('#prev').click(previousPage)
$('#close').click(function(){
    console.log('clicked')
    document.querySelector('.bg-modal').style.display="none";
})