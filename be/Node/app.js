const express = require("express");
const server = express();
const cors = require("cors");
const router = require("./control/productsController.js");
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());
server.use("/api/products", router);
server.listen(3007, () => console.log("Listening..."));
