const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    desc:{
        type:String,
         required:true
    },
    image:{
        type:String,
         required:true
    },
    imgid:{
        type:String,
        required:true
    }
},{
    timestamps:true
})


module.exports = mongoose.model('Image',imageSchema);