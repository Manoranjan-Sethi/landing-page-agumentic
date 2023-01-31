const express = require("express");
const router = express.Router();
const { getData, postData } = require("../controllers/msg.Controller");

router.post("/datap", postData);
router.get("/datag", getData);

module.exports = router;
