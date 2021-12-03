import { io } from "../config/http";

io.on("connection", (socket) => {
  socket.on("send_message", (data) => {
    socket.broadcast.emit("new_message", data);
  });
});
