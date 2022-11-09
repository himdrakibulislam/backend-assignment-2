const mongoose = require("mongoose");
//Schema design 
const tourSchema = mongoose.Schema({
    name:{
      type:String,
      required:[true,"Please provide a name for this tour event"],
      trim: true,
      minLength:[3,"Name must be at least 3 characters"],
      maxLength:[200,"Name is too large"]
    },
    description: {
      type:String,
      required:true
    },
    price:{
      type:Number,
      required:true,
      min:[0,"Price can't be negative"]
    },
    // image: {
    //   type:String,
    //   required:true
    // },
    viewCount:{
      type:Number,
      role: { type: Number, default: 0 }
    }
    
  });
  
  
  const Tour = mongoose.model("Tour",tourSchema);
  module.exports = Tour;