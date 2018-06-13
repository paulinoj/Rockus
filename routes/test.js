const express = require("express");
const router = express.Router({ mergeParams: true });

const { createSong } = require("../handlers/test");

router.route("/").post(createSong);

module.exports = router;
