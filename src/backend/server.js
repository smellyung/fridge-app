const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const db = require('./db');

app.use(express.urlencoded())
app.use(express.json())

db.connect().then(dbo => {
    app.get('/rest/products', (req, res) => {
        dbo.collection('products').find({}).toArray((err, result) => {
            if (err) throw err;
            res.send(result)
        })
    });
 })

app.listen(port, () => console.log(`Example app listening on port ${port}!`));