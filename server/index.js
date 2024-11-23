import express from "express";
import AuthRoutes from './routes/auth.routes.js'
import { connectDb } from "./db/connect.js";
import cors from "cors"
import dotenv from "dotenv"

const app = express();

dotenv.config()

app.use(express.json())
app.use(cors())

app.use("/api/auth", AuthRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Listening in port ${process.env.PORT}`);
    connectDb();
});
