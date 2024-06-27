const express = require("express");

const router = express.Router();


const downloadMP3 = require("./helper/youtubeMP3");


router.get("/:id([1-5])",(req,res)=>{
    res.send(`The Param id${req.params.id}`);
})

router.post("/mp3",async (req,res)=>{
    const videoURL = req.body.url;
    let data = await downloadMP3(videoURL);
    res.json(data);
    
})


module.exports = router;

