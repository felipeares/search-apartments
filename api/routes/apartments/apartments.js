const express = require("express");
const router = express.Router();

router.get("/search/:id", async (req, res) => {
  // return random number of apartments
  const n = Math.floor(Math.random() * 100);
  const apartments = [];
  for (let i = 0; i <= n; i++) {
    apartments.push({
      id: i,
      title: "Lorem ipsum donor et grantes os binolom hermos",
      price: 50000 + Math.floor(Math.random() * 1000000),
      size: 20 + Math.floor(Math.random() * 500),
      rooms: 1 + Math.floor(Math.random() * 8),
      bathrooms: 1 + Math.floor(Math.random() * 8),
      image:
        "https://m.foolcdn.com/media/millionacres/images/image1_BuYM1tG.width-1200.jpg"
    });
  }
  res.json(apartments);
});

module.exports = router;
