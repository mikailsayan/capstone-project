// Mit dieser Datei wird eine Funktion erstellt,
// die Daten aus der Mongodatenbank holt

import { dbConnect } from '../lib/database';
import Todo from '../components/models/TodoModel';

export async function getTodos() {
	// Wir warten auf die Datenbank und schmeißen alles in "data"
	await dbConnect();
	const data = await Todo.find();

	console.log(data);

	// Welche Daten aus der Datenbank möchtest du?
	return data.map(({ id, name, note, complexity, isChecked, edit, isOpen, selected }) => ({
		id,
		name,
		note,
		complexity,
		isChecked,
		edit,
		isOpen,
		selected,
	}));
}
