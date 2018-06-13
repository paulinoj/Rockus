const db = require("../models");

exports.createSong = async function(req, res, next) {
  try {
    const { title, artist, url, picture } = req.body;
    let song = await db.Song.create({
      title,
      artist,
      url,
      picture
    });
    return res.status(200).json(song);
  } catch (err) {
    return next(err);
  }
};
