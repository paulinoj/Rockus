const mongoose = require("mongoose");

const songListSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  songs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Song"
    }
  ],
  highScorers: [
    {
      score: {
        type: Number
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"  
      }
    }
  ]
}, { timestamps: true });

const SongList = mongoose.model("SongList", songListSchema);

module.exports = SongList;
