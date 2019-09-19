const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const db = require('./db');
const path = require('path');

app.use(express.urlencoded())
app.use(express.json())
app.use(express.static(path.join(__dirname, "../../build")));

db.connect().then(dbo => {
    app.get('/rest/products', (req, res) => {
        dbo.collection('products').find({}).toArray((err, result) => {
            if (err) throw err;
            res.send(result)
        })
    });
 })

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, "../../build", 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));