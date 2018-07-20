const db = require("../models");

module.exports = async function(req, res, next) {
  const userId = req.params.id;
  const category = req.body.category;

  // Get name of category field to update in user record 
  const fieldName = "last" + category + "SongList";
  try {
    const currentUser = await db.User.findById(userId);
    let songList;
    // If the user has never been served a songList in this category,
    // return the songList with the earliest timestamp,
    // otherwise, return next songList in ID sequence
    if (!currentUser[fieldName]) {
      songList = await db.SongList
      .find({ category: category, createdAt: { $gt: new Date(1900, 01, 01) }})
      .populate("songs")
      .populate('highScorers.user')
      .sort({ _id: 1 })
      .limit(1);
    } else {
      songList = await db.SongList
      .find({ category: category, _id: { $gt: currentUser[fieldName] }})
      .populate("songs")
      .populate('highScorers.user')
      .sort({ _id: 1 })
      .limit(1);
    }
    await db.User.findByIdAndUpdate(userId, { $set: { [fieldName]: songList[0]._id } });
    res.status(200).json(songList[0]);
  } catch (err) {
    return next({
      status: 400,
      message: "No More Song Lists In This Category"
    });    
  }
};
