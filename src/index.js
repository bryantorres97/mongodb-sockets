import { Server as WebsocketServer } from "socket.io";
import http from "http";
import app from "./app";
import { connectDB } from "./config/db";
import { APP_PORT } from "./common/constants";

connectDB();

const server = http.createServer(app);
const httpServer = server.listen(APP_PORT || 3001);
const io = new WebsocketServer(httpServer);

console.log(`Server running at port ${APP_PORT|| 3001}`);
