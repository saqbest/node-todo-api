//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
      return  console.log('Unable to connect to Mongodb server')
    }
    console.log('ok');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('596b84b0be499d083c427a78')
    }, {
        $set: {
            completed: false
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    });
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('57abbcf4fd13a094e481cf2c')
    }, {
        $set: {
            name: 'test111'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    db.close();
});