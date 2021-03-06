// Mit dieser Datei connectest du nur deine Mongodatenbank
// Hier entsteht die Funktion dbConnect, die mit der Datenbank connected

import mongoose from 'mongoose';

//const url = "mongodb://localhost:27017/shop-backend";
const url = process.env.DB_CONNECTION;

export async function dbConnect() {
	try {
		await mongoose.connect(url);
		console.log('Connected to MongoDB');
	} catch (error) {
		console.error('ERROR, could not connect', error.message);
	}
}
