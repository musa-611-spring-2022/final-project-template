const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const imageSchema = new Schema({
	url: String,
	filename: String,
	caption: String,

});

imageSchema.virtual('thumbnail').get(function () {
	return this.url.replace('/upload', '/upload/w_200');

});

module.exports = imageSchema;
