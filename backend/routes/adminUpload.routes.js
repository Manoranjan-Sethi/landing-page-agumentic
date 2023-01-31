const express = require("express");
const router = express.Router();
const {
  uploadData,
  fetchData,
} = require("../controllers/adminUpload.Controller");
const { isAdmin } = require("../middlewares/auth");

router.post("/pdata", isAdmin, uploadData);
router.get("/gdata", fetchData);

module.exports = router;
