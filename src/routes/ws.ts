import { io } from "../config/http";

io.on("connection", (socket) => {
  console.log("connected", socket.id);
});
