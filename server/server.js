const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
require("dotenv").config();
const connectionString = process.env.DB_STRING;

MongoClient.connect(connectionString)
.then(client => {
    console.log("Connected to database");
    const db = client.db("client-fences");
    const fenceCollection = db.collection("fence-data");

    // CRUD requests
})
.catch(err => {
    console.error(err);
})