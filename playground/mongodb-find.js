//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
      return  console.log('Unable to connect to Mongodb server')
    }
    console.log('ok');

    db.collection('Todos').find({completed: true}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log('Unable to fetch todos', err)
    });

/*    db.collection('Users').insertOne({
        name: 'Test',
        age: 25,
        location: 'Test location'
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert user', err)
        }

        console.log(JSON.stringify(result.ops, undefined, 2))

    });*/
    db.close();
});