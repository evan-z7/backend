const express = require ('express')
require ('./db/mongoose')
// const User = require('./models/user')
// const Task = require('./models/tasks')
// const Flight = require('./models/flight')

const UserRouter = require('./routers/user-router')
const TaskRouter = require('./routers/task-router')
const FlightRouter = require('./routers/flight-router')
const HotelRouter = require('./routers/hotel-router')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(UserRouter)
app.use(TaskRouter)
app.use(FlightRouter)
app.use(HotelRouter)

app.listen(port,()=>{console.log('hello from '+ port)})


// const jwt = require('jsonwebtoken')
// const myFuncction = async ()=>{
// const token = jwt.sign({_id:'abc123' },'this is the token',{expiresIn:'5 second'})
// console.log(token) 

// const data=jwt.verify(token,'this is the token')
// console.log(data)
// }
//myFunction()