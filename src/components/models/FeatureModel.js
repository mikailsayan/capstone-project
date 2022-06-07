import mongoose from 'mongoose';

const featureSchema = new mongoose.Schema({
	name: String,
	begin: String,
	end: String,
	color: String,
	isChecked: Boolean,
	edit: Boolean,
	addtodo: Boolean,
	selected: Boolean,
	todo: [{ type: featureSchema.Types.ObjectId, ref: 'Todo' }],
});

const Feature = mongoose.models.Feature ?? mongoose.model('Feature', featureSchema);

export default Feature;
