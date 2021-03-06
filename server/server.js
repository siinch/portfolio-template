// import the neccessary libraries
require("dotenv").config({path: "./config/.env"});
const express = require("express");
const mongoose = require("mongoose");
const router = require("./middleware/router.js");

// configure express server
const port = 3000;
const server = express();
server.use(express.static("../client"));
server.use(express.json());
server.use(router);
mongoose.connect(process.env.DATABASE_CONNECTION_STRING);

// send the root index.html
server.get("/", async (request, response) => {
  console.log("New user connecting. Loading site..");
  response.sendFile("index.html");
});

// start server
server.listen(port, () => console.log("Listening on port " + port));
