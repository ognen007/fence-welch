const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const functions = require('firebase-functions');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5000;

// MongoDB connection
const uri = 'mongodb+srv://ognen:admin12345@cluster0.g1bvp5m.mongodb.net/?retryWrites=true&w=majority';

MongoClient.connect(uri)
  .then(client => {
    console.log("Connected to the database");
    const db = client.db("client-fences");
    const fenceCollection = db.collection("fence-data");

    app.use(cors());
    app.use(express.json());

    app.post('/api/data', async (req, res) => {
      try {
        if (!req.body) {
          throw new Error('Request body is empty');
        }
    
        console.log(req.body);
    
        const data = {
          drawingParcel: req.body.drawingParcel,
          formData: req.body.formData,
          screenshotUrl: req.body.screenshotUrl,
        };
    
        await fenceCollection.insertOne(data);
        res.send(data);
      } catch (error) {
        console.error("Error submitting data:", error);
        res.status(500).send(error.message || 'Internal Server Error');
      }
    });    

    app.get('/api/data', async (req, res) => {
      const data = await fenceCollection.find().toArray();
      res.send(data);
    });
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  })
  .catch(error => console.error(error));
  