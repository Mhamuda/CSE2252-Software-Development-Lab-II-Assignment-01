const express = require("express");


const promotionsRoute = express.Router();

promotionsRoute.get("/", (req, res) => {
  res.send(`Will Send All the promotions`);
});

promotionsRoute.get("/:promoId", (req, res) => {
  res.send(`Will send promotion of id : ${req.params.promoId}`);
});


promotionsRoute.post("/", (req, res) => {
  res.send(
    `This will add promotion: ${req.body.name} with details : ${req.body.description}`
  );
});

promotionsRoute.post("/:promoId", (req, res) => {
  res
    .status(403)
    .send(`Post request not supported on /promotions/${req.params.promoId}`);
});

promotionsRoute.put("/:promoId", (req, res) => {
  res.write(`Updating the promotion: ${req.params.promoId} \n`);
  res.end(
    `Will Update the promotion: ${req.body.name} with details: ${req.body.description}`
  );
});

promotionsRoute.put("/", (req, res) => {
  res.status(403).send(`Put request is not supported on /promotions`);
});

promotionsRoute.delete("/", (req, res) => {
  res.send(`will delete all promotions`);
});

promotionsRoute.delete("/:promoId", (req, res) => {
  res.send(`will delete the promotion of Id: ${req.params.promoId}`);
});

module.exports = promotionsRoute;