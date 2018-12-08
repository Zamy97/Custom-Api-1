const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const port = 7000
const db = require('./config/db.js')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err);
    db = database.db("custom-api-1")
    require('./routes')(app, database);

    app.listen(port, () => {
        console.log("Server listening on port" + port);
    })
});
