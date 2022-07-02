import { Server as WebsocketServer } from "socket.io";
import http from "http";
import app from "./app";
import { connectDB } from "./config/db";

connectDB();

const server = http.createServer(app);
const httpServer = server.listen(process.env.PORT || 3001);
const io = new WebsocketServer(httpServer);

console.log(`Server running at port ${process.env.PORT || 3001}`);
