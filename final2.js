let map = L.map('map').setView([40.751,-73.798], 9.95); //zoomed to NYC
let layerGroup = L.layerGroup().addTo(map);

L.tileLayer('https://api.mapbox.com/styles/v1/saisheth/cl1nsj746003g15nz6hd6pqvs/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2Fpc2hldGgiLCJhIjoiY2wwcjJscXdyMmdsbDNlcWt0eWQ3NHh4bCJ9._YM5R9AGKiS7q_v80O8NVQ', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

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
    }
    {
        "name":"Census Tract 429.01",
        "percent_BA":68.9,
        "n_BA":528,
        "foreignborn_BA":546,
        "total_pop":3224
    },   
  ];

var scale = chroma.scale("BrBG").domain("percent_BA").out("hex");
