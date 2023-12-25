// server.js
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');

const app = express();
const uri = 'mongodb+srv://ognen:admin12345@cluster0.droktuw.mongodb.net/';

MongoClient.connect(uri)
.then(client => {
    console.log("Connected to database");
    const db = client.db("client-fences");
    const fenceCollection = db.collection("fence-data");

    app.use(cors());
    app.use(express.json());

    app.post('/api/data', async (req, res) => {
        const data = {
            drawParcel: req.body.drawParcel,
            formData: req.body.formData,
        };

        try {
            await fenceCollection.insertOne(data);
            res.send(data);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.get('/api/data', async (req, res) => {
        const data = await fenceCollection.find().toArray();
        res.send(data);
    });

    app.listen(5000, () => console.log('Server is running on port 5000'));
})
.catch(error => console.error(error));
