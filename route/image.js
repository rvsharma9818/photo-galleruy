const express = require('express');
const cloudinary = require('../helper/cloudinary')
const router = express.Router();

const image = require('../model/image');
const uploads = require('../helper/multer')

//Upload a pic

router.post('/upload', uploads.single('image'),async(req,res)=>{
    try{

        const result = await cloudinary.uploader.upload(req.file.path);
const pic = new image({
    title:req.body.title,
    desc:req.body.desc,
    image:result.url,
    imgid:result.public_id
});
await pic.save();
res.status(201).json(pic);

    }catch(err){
        res.status(500).json(err);
        console.log(err)
    }

    
})

// Display all  images

router.get('/',async(req,res)=>{
    try {
        const user = await image.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.delete('/delete/:id',async(req,res)=>{
    try {
        const img = await image.findByIdAndRemove(req.params.id);
        await cloudinary.uploader.destroy(img.imgid);
res.status(200).json(img)

    } catch (error) {
        res.status(500).json(error);
    }
})

// update a img

router.put("/:id", uploads.single("image"), async (req, res) => {
    try {
      let img = await image.findById(req.params.id);
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(img.imgid);
      // Upload image to cloudinary
      let result;
      if (req.file) {
        result = await cloudinary.uploader.upload(req.file.path);
      }
      const data = {
        title: req.body.title || img.title,
        desc:req.body.desc || img.desc,
        image: result?.secure_url || img.image,
        imgid: result?.public_id || img.imgid,
      };
      img = await image.findByIdAndUpdate(req.params.id, data, { new: true });
      res.json(img);
    } catch (err) {
      console.log(err);
    }
  });
  

module.exports= router;