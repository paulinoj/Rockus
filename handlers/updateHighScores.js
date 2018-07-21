const db = require("../models");

module.exports = async function(req, res, next) {
  const songListId = req.params.songListId;
  try {
    let currentSongList = await db.SongList.findById(songListId);
    const newHighScorer = {
      score: +req.body.totalScore,
      user: req.params.id
    }
    currentSongList.highScorers.push(newHighScorer);
    currentSongList.highScorers.sort((a, b) => b.score - a.score);
    if (currentSongList.highScorers.length > 10) {
      currentSongList.highScorers.pop();
    }
    await currentSongList.save();
    currentSongList = await db.SongList.findById(songListId)
      .populate("songs")
      .populate("highScorers.user");
    res.status(200).json(currentSongList);
  } catch (err) {
    return next({
      status: 400,
      message: "Could Not Update High Scorers"
    });    
  }
};
