const db = require("../models");
const items = require("./seed.config");

async function seedDatabase() {  
  await db.Song.remove({}, function(err) { 
    console.log('Song collection removed') 
  });
  await db.SongList.remove({}, function(err) { 
    console.log('SongList collection removed') 
  });
  try {
    for (let i = 0; i < items.length; i++) {
      let currentItem = items[i];
      let currentSongs = currentItem.songs;
      let songList = await db.SongList.create({
        title: currentItem.title,
        category: currentItem.category
      });
      for (let j = 0; j < currentSongs.length; j++) {
        currentSongs[j].songList = songList.id;
        let newSong = await db.Song.create(currentSongs[j]);
        songList.songs.push(newSong.id);
        await songList.save();
      }
    }
  } catch (err) {
    console.log("Database Error");
  }
}

module.exports = seedDatabase;