const mongoose = require('mongoose')
const validator = require('validator')


const Hotel = mongoose.model('hotel details',{
    name:{type:String,
    required:true},

    location:{type:String,
    required:true},

    price:{type:String,
                trim:true,
                required:true,}
    })

module.exports = Hotel
                