// require libraries
const express = require('express');
const MongoClient = require('mongodb').MongoClient;

// กำหนดค่า url ที่จะเชื่อมต่อกับ mongodb
// mongodb://username:password@host:27017
const url = `mongodb://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:27017`;
console.log(url);

//เรียกใช้ express
const app = express();

//Middleware
app.use((req, res, next) => {
    // Set ให้เว็บไหนสามารถเรียก api นี้ได้บ้าง
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:30001')
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Set ให้ Method ไหนสามารถเรียก api นี้ได้บ้าง
    res.setHeader('Access-Control-Allow-Method', 'GET, PUT, POST, DELETE');

    // Set ให้ Request Header ไหนสามารถเรียก api นี้ได้บ้าง
    // ตอนที่ react ส่ง api เป็น ajax มา จะส่ง request 2 ตัวด้านล่างมาด้วยเราจึงต้องอนุญาติ
    res.setHeader('Access-Control-Allow-Header', 'X-Requested-With, Content-type');

    next();
})

app.get('/api/products',(req, res) => {

    MongoClient.connect(url, (err, client) => {
        if(err) throw err;
        console.log('Database connected');

        // เลือก database
        const db = client.db('shoppers');

        // เลือก collection
        db.collection('products').find().toArray((err, result) => {
            if(err) throw err;

            // response
            res.status(200).send(result);

            // close connection เพื่อป้องกันไม่ให้ connection เต็ม
            client.close();
        })
    })
});

app.listen(8000, () => {
    console.log('Server Listening on port 8000');
});