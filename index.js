const express = require("express");

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send("<h1>SHES WORKING</h1>");
});

const port = process.env.PORT || 5000;

server.listen(port, () => console.log("listening on port 5000..."));
