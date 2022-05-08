const express = require('express');
const knex = require('knex');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = knex({
  client: 'mysql',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: '611test',
  },
});

// Serialization and Deserialization
const recordToFeature = function (record) {
  const geometry = {
    type: 'Point',
    coordinates: [record.longitude, record.latitude],
  };
  const properties = { ...record };
  delete properties.latitude;
  delete properties.longitude;
  return {
    type: 'Feature',
    geometry,
    properties,
  };
};

const featureToRecord = function (feature) {
  const coords = feature.geometry.coordinates;
  const record = { ...feature.properties };
  [record.longitude, record.latitude] = coords;
  return record;
};

app.get('/dogprofiles/', (req, res) => {
  db.select().from('dogprofiles')
    .then((records) => {
      res.json({
        type: 'FeatureCollection',
        features: records.map(recordToFeature),
      });
    });
});

app.post('/dogprofiles/', (req, res) => {
  const newRecord = featureToRecord(req.body);
  db.insert(newRecord).into('dogprofiles')
    .then((insertedRecords) => {
      res.json(recordToFeature(newRecord));
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
