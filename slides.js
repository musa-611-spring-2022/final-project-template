const slides = [
    {
      title: 'NYC',
      content: 'Bangladeshis are one of the fastest growing immigrant communities in NYC and the poorest compared to other Asian ethnic communities. According to a 2022 report by DOHMH on AAPI Health, 58% of Bangladeshi's in NYC earn an income 200% below the federal poverty level and Bangladeshi households in NYC are the most rent burdened of AAPI New Yorkers, 70% pay over 30% of their income on housing.Like most immigrant communities, this population faces a range of economic and social stressors, including financial strains, discrimination, inadequate housing, and social isolation.',
      bounds: [[10.546875, 48.253941, 36.298828, 57.774518]],
      features: L.geoJSON(countries, {
        filter: (feature) => feature.properties.title === 'NYC',
        onEachFeature(feature, layer) {
          layer.setStyle({ color: '#fb2828', fillOpacity: 0.2 });
          layer.bindPopup(`<h4><strong>${feature.properties.titleSlide}</strong></h4>`);
        },
      }),
    },
    {
      title: 'Bronx',
      content: `The Bronx is home to a large Bangladeshi community, mostly located in Parkchester, Grand Concourse and Norwood. Recent ACS data (2016-2020) estimated 14,918 foreign born Bangladeshis and 10,891 US-born Bangladeshis.`,
      bounds: [[10.546875, 48.253941, 36.298828, 57.774518]],
      features: L.geoJSON(countries, {
        filter: (feature) => feature.properties.title === 'Bronx',
        onEachFeature(feature, layer) {
          layer.setStyle({  color: '#fb2828', fillOpacity: 0.2 });
          layer.bindPopup(`<h4><strong>${feature.properties.titleSlide}</strong></h4>`);
        },
      }),
    },
    {
      title: 'Community District 7',
      content: `Community District 7 includes Bedford Park, Fordham North, and Norwood. Nearly 44.5% of residents are foriegn-born (ACS 2014-18).`,
      bounds: [[10.546875, 48.253941, 36.298828, 57.774518]],
      features: L.geoJSON(slides, {
        filter: (feature) => feature.properties.title === 'Community District 7',
        onEachFeature(feature, layer) {
          layer.setStyle({  color: '##fb2828', fillOpacity: 0.4 });
          layer.bindPopup(`<h4><strong>${feature.properties.NAME}</strong></h4>`);
        },
      }),
    },
  ];
  
  
  let eachFeatureFunction = function (layer) {
    layer.bindPopup(
      `NAME: ${layer.feature.properties.NAME}`,
    );
    layer.on('click', (event) => {
      console.log(layer.feature);
    });
  };