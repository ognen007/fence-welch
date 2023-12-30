const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const uri = 'mongodb+srv://ognen:admin12345@cluster0.0p2buny.mongodb.net/?retryWrites=true&w=majority';

const memoryStorage = multer.memoryStorage();
const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ dest: 'uploads/' });

MongoClient.connect(uri)
  .then(client => {
    console.log("Connected to the database");
    const db = client.db("client-fences");
    const fenceCollection = db.collection("fence-data");

    app.use(cors());
    app.use(express.json());

    app.post('/api/data', upload.single('drawParcel'), async (req, res) => {
        try {
          console.log(req.body);
          let screenshotData;
          if (req.file) {
            if (req.file.size <= 50 * 1024 * 1024) {
              // Use memory storage if the file is small enough
              screenshotData = req.file.buffer;
            } else {
              // Use disk storage for larger files
              screenshotData = path.join(__dirname, 'uploads', req.file.filename);
            }
          } else {
            console.error('No screenshotData file uploaded');
            return res.status(400).send('No screenshotData file uploaded');
          }
      
          const data = {
            drawParcel: req.body.drawParcel,
            formData: req.body.formData,
            screenshotData: screenshotData,
          };
      
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
