import mongoose from "mongoose";
// dotenv.config();

export const connectDb = async () => {
	try {
		const connection = await mongoose.connect(process.env.MONGO_URL);
		console.log(`Connected with database: ${connection.connection.host}`);
	} catch (err) {
		console.log("Couldn't connect to the database");
		process.exit(1);
	}
}
