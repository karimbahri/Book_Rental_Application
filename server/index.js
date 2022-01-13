const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

const dotenv = require("dotenv");
const cors = require("cors");

const db_connect = require("./database/connections");
const routes = require("./routes/routes");

const userModel = require("./models/userModel");

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 5000;

db_connect();

/* MIDDLEWARES */
app.use(express.json(), cors());
app.use("/", routes);
app.use((err, req, res, next) => {
  res.status(504).json({
    status: "Failure",
    message: err.message || "Server error",
  });
  next();
});

/** socket config */
server.listen(3030, () => {
  console.log(`socket running on LocalHost: 3030`);
});
const connections = [];
io.on("connection", (socket) => {
  connections.push(socket);

  socket.on("disconnect", () => {
    // console.log(connections.length);
    socket.disconnect(true);
    // console.log(connections.length);
    // console.log(socket);
    // console.log("Disconnected - " + socket.id);
  });

  socket.on("addUser", (userData) => {
    console.log("server socket on");
    const now = new Date();
    const current_date = now.toLocaleDateString("en-Us");
    const user = new userModel({
      fullName: userData.fullName,
      email: userData.email,
      isAdmin: userData.isAdmin,
      password: userData.password,
      address: userData.address,
      userName: userData.userName.toLowerCase(),
      phoneNumber: userData.phoneNumber,
      zipCode: userData.zipCode,
      created_at: current_date,
    });

    user.save((err, result) => {
      if (err) {
        console.log("ADD NEW ITEM failed!!" + err);
        io.emit("addUser", user);
      } else {
        console.log({ message: "ADD NEW ITEM worked!!" });
      }
    });
  });
});

/* MIDDLEWARES */

app.listen(PORT, () => {
  console.log(`server running on LocalHost:${PORT}`);
});
