const mongoose = require("mongoose");

const apartmentSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
    index: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  rooms: {
    type: Number,
    required: true
  },
  bathrooms: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Apartment", apartmentSchema);
