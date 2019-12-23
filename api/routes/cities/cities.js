const express = require("express");
const router = express.Router();

const cities = [
  "madrid",
  "barcelona",
  "valencia",
  "sevilla",
  "zaragoza",
  "málaga",
  "murcia",
  "palma de mallorca",
  "las palmas de gran canaria",
  "bilbao",
  "alicante",
  "córdoba",
  "valladolid",
  "vigo",
  "gijón",
  "hospitalet de llobregat",
  "vitoria",
  "la coruña",
  "granada",
  "elche",
  "oviedo",
  "tarrasa",
  "badalona",
  "cartagena",
  "jerez de la frontera",
  "sabadell",
  "móstoles",
  "santa cruz de tenerife",
  "pamplona",
  "almería",
  "alcalá de henares",
  "fuenlabrada",
  "leganés",
  "san sebastián",
  "getafe",
  "burgos",
  "albacete",
  "santander",
  "castellón de la plana",
  "alcorcón",
  "san cristóbal de la laguna",
  "logroño",
  "badajoz",
  "huelva",
  "salamanca",
  "marbella",
  "lérida",
  "dos hermanas",
  "tarragona",
  "torrejón de ardoz",
  "parla",
  "mataró",
  "león",
  "algeciras",
  "santa coloma de gramanet",
  "cádiz",
  "alcobendas",
  "jaén",
  "orense",
  "reus",
  "telde",
  "baracaldo",
  "gerona"
];

router.get("/search/:id", async (req, res) => {
  // TODO: work with tildes
  const patt = new RegExp("^" + req.params.id.toLowerCase().trim());
  const filtered = cities.filter(city => patt.test(city));

  res.json(filtered);
});

module.exports = router;
