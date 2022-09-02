const express = require("express");
const testController = require("../controllers/test.controller");
const router = express.Router();

// GET
router.get("/hello", testController);
module.exports = router;
