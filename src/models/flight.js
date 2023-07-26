const mongoose = require('mongoose')
const validator = require('validator')

const Flight = mongoose.model('flight details',{
    number:{type:Number,
    required:true},

    source:{type:String},

    distination:{type:String,
                trim:true,
                required:true,},
                
      date:{type:String,
                required:true,
                },
      departure:{type:String,
                required:true,},
      duration:{type:String,
        required:true,}

})
module.exports= Flight