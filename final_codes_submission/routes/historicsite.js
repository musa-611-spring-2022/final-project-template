const express = require('express');
const router = express.Router({ mergeParams: true });
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const HistoricSite = require('../models/historicsite');
const Memory = require('../models/memory');
const Joi = require('joi');
const { historicsiteSchema, memorySchema } = require('../schema.js');
const { storage_memory, storage, cloudinary } = require('../cloudinary');
const multer = require('multer');
const upload = multer({ storage });
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapboxToken = process.env.MAP_BOX_TOKEN;
const geocoder = mbxGeocoding({ accessToken: mapboxToken });



// get an array of all object in database
const arrayOfDocsHist = [];
const pop = async () => {
	for await (const myDoc of HistoricSite.find()) {
		arrayOfDocsHist.push(myDoc);
	}

}
pop();









const validateHistoricsite = (req, res, next) => {
	const { error } = historicsiteSchema.validate(req.body);
	if (error) {
		const msg = error.details.map(el => el.message).join(',');
		throw new ExpressError(msg, 400);
	} else {
		next();
	}
}



router.get('/',  catchAsync(async (req, res) => {
	const historicsites = await HistoricSite.find({});
	res.render('historicsites/index', { historicsites });

}))

router.get('/new', (req, res) => {
	res.render('historicsites/new');
})

router.post('/', upload.array('image'), validateHistoricsite, catchAsync(async (req, res, next) => {
	// console.log(req.body);
	const geoData = await geocoder.forwardGeocode({
		query: req.body.historicsite.address,
		limit: 1,
	}).send();
	const historicsite = new HistoricSite(req.body.historicsite);
	historicsite.geometry = geoData.body.features[0].geometry;
	historicsite.image = req.files.map(f => ({ url: f.path, filename: f.filename }));

	await historicsite.save();
	// console.log(historicsite);
	req.flash('success', 'Successfully made a new historic site!');
	res.redirect(`/historicsites/${historicsite._id}`);

}))



router.get('/:id', catchAsync(async  (req, res) => {
	const historicsite = await HistoricSite.findById(req.params.id).populate('memories');
	if (!historicsite) {
		req.flash('error', 'Cannot found that site!');
		return res.redirect('/historicsites');
	}
	res.render('historicsites/show', { historicsite, arrayOfDocsHist });
}))

router.get('/:id/edit', catchAsync(async (req, res) => {
	const historicsite = await HistoricSite.findById(req.params.id);
	if (!historicsite) {
		req.flash('error', 'Cannot found that site!');
		return res.redirect('/historicsites');
	}
	res.render('historicsites/edit', { historicsite });
}))

router.put('/:id', upload.array('image'), validateHistoricsite, catchAsync(async(req, res) => {
	const { id } = req.params;
	const historicsite = await HistoricSite.findByIdAndUpdate(id, { ...req.body.historicsite});
	const img = req.files.map(f => ({ url: f.path, filename: f.filename }));
	const geoData = await geocoder.forwardGeocode({
		query: req.body.historicsite.address,
		limit: 1,
	}).send();
	historicsite.geometry = geoData.body.features[0].geometry;


	await historicsite.image.push(...img);
	await historicsite.save();
	if (req.body.deleteImage) {
		for (let filename of req.body.deleteImage) {
			await cloudinary.uploader.destroy(filename);
		}
		await historicsite.updateOne({ $pull: { image: { filename: { $in: req.body.deleteImage }}}});
		// console.log(historicsite);

	}
	req.flash('success', 'Successfully updated a new site!');

	res.redirect(`/historicsites/${historicsite._id}`);
}))

router.delete('/:id', async (req, res) => {
	const { id }  = req.params;
	await HistoricSite.findByIdAndDelete(id);
	req.flash('success', 'Successfully deleted a site!');
	res.redirect('/historicsites');
})



module.exports = router;