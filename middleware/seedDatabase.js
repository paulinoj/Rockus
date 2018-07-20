const axios = require("axios");
const db = require("../models");
const items = require("./seed.config");

async function seedDatabase() {  
  await db.Song.remove({}, function(err) { 
    console.log('Song collection removed') 
  });
  await db.SongList.remove({}, function(err) { 
    console.log('SongList collection removed') 
  });
  await db.User.remove({}, function(err) { 
    console.log('User collection removed') 
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

      let { data } = await axios["get"]("https://randomuser.me/api/?results=10");
      let { results } = data;

      for (let k = 0; k < results.length; k++) {
        let result = results[k];
        let newUser = await db.User.create({
          email: result.email,
          username: result.login.username,
          password: result.login.password,
          photoUrl: result.picture.thumbnail
        });
        songList.highScorers.push(
          {
            score: Math.floor(Math.random() * 50) + 1,
            user: newUser.id
          }
        );
        await songList.save();
      }
    }
  } catch (err) {
    console.log("Database Error");
    // console.log(err.response.data.error);
  }
}

module.exports = seedDatabase;