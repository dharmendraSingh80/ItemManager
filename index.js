const express = require("express");
const passport = require("passport");
const itemRoutes = require("./routes/itemRoutes");
const authRoutes = require("./routes/authRoutes");
require("./config/mongoose");
const port = 8000;

// Create an instance of Express.js
const app = express();

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
require("./config/passport");

app.use("/api/items", itemRoutes);
app.use("/api/auth", authRoutes);

// Start the server

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
