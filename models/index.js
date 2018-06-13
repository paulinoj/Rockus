const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/rockus", {
  keepAlive: true
});

module.exports.User = require("./user");
module.exports.SongList = require("./songList");
module.exports.Song = require("./song");
