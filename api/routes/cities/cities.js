const express = require("express");
const router = express.Router();

// HARD CODED!
// TODO: Implement MongoDB or SQL DB
const cities = require("../../db/cities");

router.get("/search/:id", async (req, res) => {
  // TODO: work with tildes
  const patt = new RegExp(req.params.id.toLowerCase().trim());
  const filtered = cities.filter(city => patt.test(city));
  res.json(filtered);
});

module.exports = router;
