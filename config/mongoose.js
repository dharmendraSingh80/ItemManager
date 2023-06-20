const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose.connect("mongodb://127.0.0.1:27017/my-app");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in connection to db"));

db.once("open", () => {
  console.log("Connected to db");
});

module.exports = db;
