const db = require("../models");

function queue(fn) {
  let lastPromise = Promise.resolve();
  return function(req, res, next) {
    let returnedPromise = lastPromise.then(() => fn(req, res, next));
    // If `returnedPromise` rejected, swallow the rejection for the queue,
    // but `returnedPromise` rejections will still be visible outside the queue
    lastPromise = returnedPromise.catch(() => {});
    return returnedPromise;
  };
}

const updateHighScore = async function(req, res, next) {
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

module.exports = queue(updateHighScore);