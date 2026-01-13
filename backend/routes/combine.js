const auth = require("./frontendAuth");
const login = require("./login");
const express = require("express");
const router = express.Router();

router.use(auth);
router.use(login);

module.exports = router;
