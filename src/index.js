const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

/*app.use((req, res, next)=>{
    if(req.method === 'GET'){
        res.send('GET requests are disabled')
    }else {
        next()
    }
    
})*/

/*app.use((req, res, next)=>{
    res.status(503).send('Maintenance')
})*/



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

/*const Task = require('./models/task')
const User = require('./models/user')

const main = async ()=>{
    // const task = await Task.findById('6000f1bc5e9b3d2147a6304a')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('6000f0e0edb7592088cedfc1')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}


main()*/

