require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes");
const tripRoutes = require("./routes/tripRoutes");
const searchRoutes =
require("./routes/searchRoutes");

// TEMPORARY
const postRoutes = require("./routes/postRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(
    "/api/search",
    searchRoutes
);

// ======================
// ROUTES
// ======================

app.use("/api/users", userRoutes);

app.use("/api/trips", tripRoutes);

// TEMPORARY (will remove later)
app.use("/api/posts", postRoutes);

// ======================

app.get("/api/test", (req, res) => {
  res.json({
    message: "Provelers API Working",
  });
});

// ======================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// ======================

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`🚀 Server Running on ${PORT}`);
});
