const express = require("express");
const router = express.Router({ mergeParams: true });
const songList = require("../handlers/songList");
const updateHighScores = require("../handlers/updateHighScores");

router.route("/:songListId").put(updateHighScores);
router.route("/").post(songList);

module.exports = router;
