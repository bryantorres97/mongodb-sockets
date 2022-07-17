import { Server as WebsocketServer } from "socket.io";
import http from "http";
import app from "./app";
import { connectDB } from "./config/db";
import { APP_PORT } from "./common/constants";
import sockets from './common/sockets';

connectDB();

const server = http.createServer(app);
const httpServer = server.listen(APP_PORT || 3001);
const io = new WebsocketServer(httpServer);
sockets(io)
console.log(`Server running at port ${APP_PORT|| 3001}`);
