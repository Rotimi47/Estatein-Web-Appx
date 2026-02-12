const express = require("express");
const cors = require("cors");
const propertyRoutes = require("./routes/propertyRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

require("dotenv").config();

// Initialize Firebase Admin (ONCE, from config)
require("./config/firebase");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use("/api/properties", propertyRoutes);
app.use("/api/payments", paymentRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
