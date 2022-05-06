const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Memory = require('./memory');
const imageSchema = require('./image');



const historicsiteSchema = new Schema({
	order: Number,
	name: String,
	address: String,
	image: [imageSchema],
	description: [String],
	geometry: {
		type: {
			type: String, 
			enum: ['Point'],
			required: true
		},
		coordinates: {
			type: [Number],
			required: true
		}
	},
	people: [String],
	memories: [
	{
		type: Schema.Types.ObjectId,
		ref: 'Memory'
	}
	]
});

historicsiteSchema.post('findOneAndDelete', async function (doc) {
	if (doc) {
		await Memory.remove({
			_id: {
				$in: doc.memories
			}
		})
	}
});

module.exports = mongoose.model('HistoricSite', historicsiteSchema);





