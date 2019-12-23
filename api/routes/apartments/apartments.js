const express = require("express");
const router = express.Router();

router.get("/search/:id", async (req, res) => {
  // MOCKED!
  // return random number of apartments
  const n = Math.floor(Math.random() * 100);
  const apartments = [];
  for (let i = 0; i <= n; i++) {
    apartments.push({
      price: 50000 + Math.floor(Math.random() * 1000000),
      size: 20 + Math.floor(Math.random() * 500),
      rooms: 1 + Math.floor(Math.random() * 8),
      bathrooms: 1 + Math.floor(Math.random() * 8)
    });
  }
  res.json(apartments);
});

module.exports = router;
