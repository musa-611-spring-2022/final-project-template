const express = require('express');
const router = express.Router({ mergeParams: true });
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const HistoricSite = require('../models/historicsite');
const Memory = require('../models/memory');
const Joi = require('joi');
const { historicsiteSchema, memorySchema } = require('../schema.js');
const { storage, cloudinary } = require('../cloudinary');
const multer = require('multer');
const upload = multer({ storage });

const validateMemory = (req, res, next) => {
	console.log(req.body.memory);
	const { error } = memorySchema.validate(req.body);
	if(error) {
		const msg = error.details.map(el => el.message).join(',');
		throw new ExpressError(msg, 400);
	} else {
		next();
	}
}



router.post('/', upload.array('image'), catchAsync(async (req, res, next) => {
	console.log(req.body);
	const historicsite = await HistoricSite.findById(req.params.id);
	const memory = new Memory(req.body.memory);
	memory.image = req.files.map(f => ({ url: f.path, filename: f.filename }));
	historicsite.memories.push(memory);
	await memory.save();
	await historicsite.save();
	req.flash('success', 'Created new memory!')
	res.redirect(`/historicsites/${historicsite._id}`);

}))

router.delete('/:memoryId', catchAsync(async (req, res) => {
	const { id, memoryId } = req.params;
	await HistoricSite.findByIdAndUpdate(id, { $pull: { memories: memoryId }});
	await Memory.findByIdAndDelete(memoryId);
	req.flash('success', 'Successfully deleted a memory!')

	res.redirect(`/historicsites/${id}`);

}))

module.exports = router;