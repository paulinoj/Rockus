const mongoose = require("mongoose");
const SongList = require("./songList");

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  picture: {
    type: String
  },
  songList: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SongList"
  }  
});

songSchema.pre("remove", async function(next) {
  try {
    let songList = await SongList.findById(this.songList);
    songList.songs.remove(this.id);
    await songList.save();
    return next();
  } catch (e) {
    return next(e);
  }
});

// Compound of title and artist must be unique
songSchema.index({ "title": 1, "artist": 1}, { "unique": true });

const Song = mongoose.model("Song", songSchema);

module.exports = Song;
