const express = require("express");
const router = express.Router({ mergeParams: true });
const songList = require("../handlers/songList");

router.route("/").post(songList);

module.exports = router;
