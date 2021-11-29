import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

import { routes } from "../routes/http";

const app = express();

const serverHttp = http.createServer(app);
const io = new Server(serverHttp, { cors: { origin: "*" } });

app.use(cors());

export { serverHttp, io };
