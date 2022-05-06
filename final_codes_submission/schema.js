const Joi = require('joi');

module.exports.historicsiteSchema = Joi.object({
	historicsite: Joi.object({
		name: Joi.string().required(),
		address: Joi.string().required(),
		description: Joi.array().required(),
		people: Joi.array(),
	}).required(),
	deleteImage: Joi.array(),
})

module.exports.memorySchema = Joi.object({
	memory: Joi.object({
		title: Joi.string().required(),
		story: Joi.string().required(),
	}).required()
})