import path from "path";
import express from "express";
import { config as dotEnvConfig } from "dotenv";

dotEnvConfig();

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

export default app;
