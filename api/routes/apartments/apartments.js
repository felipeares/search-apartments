const express = require("express");
const Apartment = require("../../models/apartments");
const router = express.Router();

router.get("/search/:id", async (req, res) => {
  // only search for exact match
  const city = req.params.id.toLowerCase().trim();
  try {
    const apartments = await Apartment.find({ city: city });
    res.json(apartments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
