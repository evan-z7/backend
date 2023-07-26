const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({

    name:{type: String, 
        trim:true,
    required:true  },

    email:{type :String,
            required: true,
            unique:true,
            validate(value){if(!validator.isEmail(value)){throw new Error ('email is invalid')}},
            trim:true },

     password:{type:String ,
               required:true,
               minLength:8,
               trim: true,
            validate(value){if(value.includes('password')){ throw new Error ('password is invalid')}}    
        },       
    
})

//login 
userSchema.statics.findByCredentials=async(email , password)=>{
    const user = await User.findOne({email})
    if(!user){throw new Error ('unable to login')}

    const isMatch=await bcrypt.compare(password , user.password )
    if(!isMatch){throw new Error('enable to login')}
    
     return user
}

//hash plain text before saving 
userSchema.pre('save',async function(next){
    const user = this 
     if(user.isModified('password')){
         user.password= await bcrypt.hash(user.password, 8)

    }
    next()
})
const User = mongoose.model('user details',userSchema) 
module.exports=User