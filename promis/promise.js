const User = require('../src/models/user')

require('../src/db/mongoose')
require('../src/models/user')   

const updateAgeAndCount = async (id , age) => {
    const user = await user.findByIdAndUpdate( id , {age})
    const count = await user.countDocuments({age})
    return count
}

updateAgeAndCount('', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})