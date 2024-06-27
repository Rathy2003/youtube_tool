const poji_ytmp3 = require('youtube-to-mp3-poji');
const downloadMP3 = async function(url){
    try {
        const data = await poji_ytmp3(url); // link youtube
        return data
      } catch (error) {
        return error.message;
      }
}

module.exports = downloadMP3;