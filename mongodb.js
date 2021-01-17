//const mongodb = require('mongodb')
//const MongoClient = mongodb.MongoClient
//const ObjectID = mongodb.ObjectID
const {MongoClient, ObjectID} = require('mongodb')
const validator = require('validator')

//const connectionURL = 'mongodb://127.0.0.1:27017'
//const databaseName = 'task-manager'

console.log(validator.isEmail('mark@foo.com'))


MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to a database')
    }

    const db = client.db(databaseName)

    /*db.collection('users').updateOne({
        _id: new ObjectID('5ed2e58749b3ff132e931368')
    }, {
            $inc: {
                age: -5
            }
        
    }).then((result) =>{
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })*/

    /*db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }
    ).then((result) =>{
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })*/

    /*db.collection('users').deleteMany({
        age: 27
    }).then((result) =>{
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })*/
 






    db.collection('users').findOne({_id: new ObjectID('5ed2f66b310e3615acfe8ff1')}, (error, user)=>{
        if (error){
            return console.log('Unable to find')
        }
        console.log(user)
    })
    
    db.collection('users').find({name: 'Nikita'}).toArray((error, users) => {
        if (error){
            return console.log('Unable to find')
        }
        console.log(users)
    })

    db.collection('users').find({name: 'Nikita'}).count((error, count) => {
        if (error){
            return console.log('Unable to find')
        }
        console.log(count)
    })


    /*db.collection('tasks').find({completed: true}).toArray((error, tasks) => {
        console.log(tasks)
    })*/

    /*db.collection('users').insertOne({
        name: 'Nikita',
        age: 27
    }, (error, result) => {
        if(error) {
            return console.log('Unable to insert user')
        }
        console.log(result.ops)
    })*/
    /*db.collection('users').insertMany([
        {
            name: 'Jen',
            age: 28
        },
        {
            name: 'Gunther',
            age: 19
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert documents')
        }

        console.log(result.ops)
    })*/

    /*db.collection('tasks').insertMany([
        {
            description: 'Do Pilates',
            completed: true
        },
        {
            description: 'Node.js',
            completed: true
        },
        {
            description: 'Algorithms',
            completed: false
        }
    ], (error, result) => {
        if (error){
            console.log('Unable to insert document')
        } 
        console.log(result.ops)
    })*/


})

