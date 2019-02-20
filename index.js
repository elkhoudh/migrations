const express = require("express");
const db = require("./data/db");
const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  db("todos2")
    .then(todos => {
      res.status(200).json(todos);
    })
    .catch(() => res.status(500).json({ message: "Server error" }));
});

server.post("/", (req, res) => {
  const { task } = req.body;

  if (!task) {
    res.status(422).json({ message: "Task Required" });
  } else {
    db("todos2")
      .insert({ task, completed: false })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(() => res.json({ message: "Server Error" }));
  }
});

const port = process.env.PORT || 5000;

server.listen(port, () => console.log("listening on port 5000..."));
