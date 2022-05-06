const mongoose = require('mongoose');
const sites = require('./sites');
const HistoricSite = require('../models/historicsite');
mongoose.connect('mongodb://localhost:27017/7th-ward', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('err', console.error.bind(console, 'connection error: '));
db.once('open', () => {
	console.log('Database connected');
});


const seedDB = async () => {
	await HistoricSite.deleteMany({});
	for (let i = 0; i < sites.length ; i ++) {
		const site = new HistoricSite({
			order: sites[i].order,
			name: sites[i].name,
			address: sites[i].address,
			image: sites[i].image,
			description: sites[i].description,
			geometry: sites[i].geometry,
			people: sites[i].people,

		});
		await site.save();
	}

};

seedDB()
.then(() => {
	mongoose.connection.close();
})