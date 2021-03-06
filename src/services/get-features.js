// Mit dieser Datei wird eine Funktion erstellt,
// die Daten aus der Mongodatenbank holt

import { dbConnect } from '../lib/database';
import Feature from '../components/models/FeatureModel';

export async function getFeatures() {
	// Wir warten auf die Datenbank und schmeißen alles in "data"
	await dbConnect();
	const data = await Feature.find().populate('todo');

	console.log(data);

	// Welche Daten aus der Datenbank möchtest du?
	return data.map(({ id, name, begin, end, isChecked, edit, addtodo, selected, todo }) => ({
		id,
		name,
		begin,
		end,
		isChecked,
		edit,
		addtodo,
		selected,
		todo,
	}));
}
