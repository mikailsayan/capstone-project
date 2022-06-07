import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
	name: String,
	begin: String,
	end: String,
	color: String,
	edit: Boolean,
	selected: Boolean,
	feature: [{ type: projectSchema.Types.ObjectId, ref: 'Feature' }],
});

const Project = mongoose.models.Project ?? mongoose.model('Project', projectSchema);

export default Project;
