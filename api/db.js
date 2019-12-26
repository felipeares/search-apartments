const mongoose = require("mongoose");
const dbInit = require("./db-init-mock");

// Get the env for DB connection
const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB
} = process.env;

// Connection options
const options = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Set URL
const url = `mongodb://mongodb:27017/prop`;

// Connect and mock data on first build
mongoose
  .connect(url, options)
  .then(() => {
    console.log("connected to database");

    // INSERT MOCKED DATA ON FIRST BUILD
    // TODO: Remove this script, only for mocking data
    dbInit();
  })
  .catch(error => {
    console.error(error);
  });

// return exported connection
const db = mongoose.connection;
module.exports = db;
