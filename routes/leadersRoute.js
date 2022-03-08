const express = require("express");

const leadersRoute = express.Router();

leadersRoute.get("/", (req, res) => {
  res.send(`All the leaders will be sent to you`);
});

leadersRoute.get("/:leaderId", (req, res) => {
  res.send(`Will send leader of id: ${req.params.leaderId}`);
});

leadersRoute.post("/", (req, res) => {
  res.send(
    `This will add leader: ${req.body.name} with details: ${req.body.description}`
  );
});

leadersRoute.post("/:leaderId", (req, res) => {
  res
    .status(403)
    .send(`Post request not supported on /leaders/${req.params.leaderId}`);
});

leadersRoute.put("/:leaderId", (req, res) => {
  res.write(`Updating the leader: ${req.params.leaderId}`);
  res.end(`Leader: ${req.body.name} with details: ${req.body.description}`
  );
});

leadersRoute.put("/", (req, res) => {
  res.status(403).send(`Put request not supported on /leaders`);
});

leadersRoute.delete("/", (req, res) => {
  res.send(`All the leaders will be deleted`);
});

leadersRoute.delete("/:leaderId", (req, res) => {
  res.send(`Deleting the leader of id: ${req.params.leaderId}`);
});

module.exports = leadersRoute;