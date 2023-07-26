const mongoose = require('mongoose')
const validator = require('validator')

const Task = mongoose.model('task details',{
    description:{type:String,
                trim:true,
                required:true,},
      completed:{type:Boolean,
                required:true,
                default:false}
})
module.exports= Task