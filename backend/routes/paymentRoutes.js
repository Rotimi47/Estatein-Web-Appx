
const express = require("express");
const router = express.Router();

// Mock payment endpoint
router.post("/pay", (req, res) => {
  const { amount, email } = req.body;

  // In real life, here you'd call Paystack SDK or API
  // For mock, just return a fake reference
  const fakeReference = `MOCK-${Date.now()}`;

  res.json({
    status: "success",
    reference: fakeReference,
    amount,
    email,
  });
});

module.exports = router;
