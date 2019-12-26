const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");

// middleware
app.use(cors());
app.use(express.json());

// pre flight
app.options("*", cors());

// routes
const citiesRouter = require("./routes/cities/cities");
const apartmentsRouter = require("./routes/apartments/apartments");
app.use("/cities", citiesRouter);
app.use("/apartments", apartmentsRouter);

// start
app.listen(9000, () => console.log("server started"));
