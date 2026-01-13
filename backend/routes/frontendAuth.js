const express = require("express");
const protect = require("../middleware/protect");
const router = express.Router();
router.get("/authFrontend", protect, (req, res) => {
  res.status(200).json({
    authenticated: true,
    user: req.user,
  });
});

module.exports = router;
