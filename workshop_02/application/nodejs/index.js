// require libraries
const express = require('express');
const MongoClient = require('mongodb').MongoClient;

// กำหนดค่า url ที่จะเชื่อมต่อกับ mongodb
// mongodb://username:password@host:27017
const url = `mongodb://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:27017`;
console.log(url);

//เรียกใช้ express
const app = express();

app.get('/',(req, res) => {
    MongoClient.connect(url, (err, client) => {
        if(err) throw err;
        console.log('Database connected');

        // เลือก database
        const db = client.db('shoppers');

        // เลือก collection
        db.collection('products').find().toArray((err, result) => {
            if(err) throw err;

            // response
            res.send(result);
        })
    })
});

app.listen(3000, () => {
    console.log('Server Listening on port 3000');
});