const express = require("express");

const router = express.Router();

const poji_ytmp3 = require('youtube-to-mp3-poji');


router.get("/:id([1-5])",(req,res)=>{
    res.send(`The Param id${req.params.id}`);
})

router.get("/mp3",async (req,res)=>{
    const videoURL = "https://youtu.be/-ViBQuu-TeY?list=RDMM-ViBQuu-TeY";
    try {
        const data = await poji_ytmp3(videoURL); // link youtube
        res.json(data);
      } catch (error) {
        console.error("Error occurred:", error.message);
      }
    
})

module.exports = router;

