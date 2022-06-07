import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
	name: String,
	note: String,
	complexity: String,
	isChecked: Boolean,
	edit: Boolean,
	isOpen: Boolean,
	selected: Boolean,
});

const Todo = mongoose.models.Todo ?? mongoose.model('Feature', todoSchema);

export default Todo;
