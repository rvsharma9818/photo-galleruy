const express = require('express');
const cloudinary = require('../helper/cloudinary')
const router = express.Router();

const image = require('../model/image');
const uploads = require('../helper/multer')

router.post('/upload', uploads.single('image'),async(req,res)=>{
    try{

        const result = await cloudinary.uploader.upload(req.file.path);
const pic = new image({
    title:req.body.title,
    desc:req.body.desc,
    image:result.url
});
await pic.save();
res.status(201).json(pic);

    }catch(err){
        res.status(500).json(err);
        console.log(err)
    }

    
})



module.exports= router;