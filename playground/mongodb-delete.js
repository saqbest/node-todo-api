//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
      return  console.log('Unable to connect to Mongodb server')
    }
    console.log('ok');

    db.collection.deleteMany({test: 'Something to do'}).then((result) => {
        console.log(result)
    });

    db.collection.deleteOne({test: 'Something to do'}).then((result) => {
        console.log(result)
    });

    db.collection.deleteOne({test: 'Something to do'}).then((result) => {
        console.log(result)
    });

    db.close();
});