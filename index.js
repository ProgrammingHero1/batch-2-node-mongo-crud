const express = require('express');

const password = 'yQgwjNcRYJiVdX5';

const uri = "mongodb+srv://organicUser:yQgwjNcRYJiVdX5@cluster0.bzdnt.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

const app = express();

app.get('/', (req, res) => {
    res.send('hello I am working')
})


const MongoClient = require('mongodb').MongoClient;

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.listen(3000);