const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const password = 'yQgwjNcRYJiVdX5';

const uri = "mongodb+srv://organicUser:yQgwjNcRYJiVdX5@cluster0.bzdnt.mongodb.net/organicdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,  useUnifiedTopology: true });

const app = express();

app.get('/', (req, res) => {
    res.send('hello I am working')
})




client.connect(err => {
  const collection = client.db("organicdb").collection("products");
  console.log('databae connected')
  client.close();
});


app.listen(3000);