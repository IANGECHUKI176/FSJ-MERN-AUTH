const express = require("express");
const { getPrivateData } = require("../controllers/private");
const { private } = require("../middleware/auth");
const router = express.Router();

router.get("/", private, getPrivateData);
module.exports = router;
