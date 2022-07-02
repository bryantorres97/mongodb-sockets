import path from "path";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

export default app;
