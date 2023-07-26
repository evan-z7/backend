const Task = require('../src/models/tasks')

require('../src/db/mongoose')
require('../src/models/tasks')   


const deleteTask = async (id)=>{
 const task = await Task.findByIdAndDelete(id)
 const count = await Task.countDocuments({completed:true})
 return count
}
deleteTask('').then((count)=>{console.log(count)})
.catch((e) => {
    console.log(e)
})