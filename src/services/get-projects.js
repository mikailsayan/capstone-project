// Mit dieser Datei wird eine Funktion erstellt,
// die Daten aus der Mongodatenbank holt

import { dbConnect } from '../lib/database';
import Project from '../components/models/ProjectModel';

export async function getProjects() {
	// Wir warten auf die Datenbank und schmeißen alles in "data"
	await dbConnect();
	const data = await Project.find().populate('feature');

	console.log(data);

	// Welche Daten aus der Datenbank möchtest du?
	return data.map(({ id, name, begin, end, color, edit, selected, feature }) => ({
		id,
		name,
		begin,
		end,
		color,
		edit,
		selected,
		feature,
	}));
}
