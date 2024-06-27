const poji_ytmp3 = require('youtube-to-mp3-poji');
var youtubeThumbnail = require('youtube-thumbnail');
const downloadMP3 = async function(url){
    try {
        const data = await poji_ytmp3(url); // link youtube
        let thumbnail = youtubeThumbnail(url);
        return {data,thumbnail,info}
      } catch (error) {
        return error.message;
      }
}

module.exports = downloadMP3;