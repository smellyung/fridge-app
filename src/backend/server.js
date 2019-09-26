const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const port = process.env.PORT || 3001;
const db = require('./db');
const path = require('path');

app.use(bodyParser.json())
app.use(express.urlencoded())
app.use(express.json())
app.use(express.static(path.join(__dirname, "../../build")));


db.connect().then(dbo => {
    //read products db
    app.get('/rest/products', (req, res) => {
        dbo.collection('products').find({}).toArray((err, result) => {
            if (err) throw err;
            res.send(result)
        })
    });
    //create product in db
    app.post('/rest/products', (req, res) => {
        const product = req.body;
        dbo.collection('products').insertOne(product, (err, result) => {
            if (err) throw err;
            dbo.collection('products').find({}).toArray((err, result) => {
                if (err) throw err;
                res.send(result)
            })
        })
    });
    app.post('/rest/login', jsonParser, (req,res) => {
        const id_token = req.headers['authorization'].replace('Bearer ', '');
        console.log("id_token is: ", id_token);
        fetch(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${id_token}`).then(res => {
            return res.ok ? res.json() : Promise.reject();
        }).then(decodedToken => {
            console.log('Our decoded token is: ', decodedToken);
            res.end(JSON.stringify({
                result: 'Hi',
                decodedToken
            }));
        })
    })
    // delete product in db
    app.delete('/rest/products', (req, res) => {
        const product = req.body;
        dbo.collection('products').deleteOne(product, (err, result) => {
            if (err) throw err;
            dbo.collection('products').find({}).toArray((err, result) => {
                if (err) throw err;
                res.send(result)
            })
        })
    });

    app.delete('/rest/products/deleteAll', (req, res) => {
        dbo.collection('products').deleteMany({}, (err, result) => {
            if (err) throw err;
            dbo.collection('products').find({}).toArray((err, result) => {
                if (err) throw err;
                res.send(result)
            })
        })
    })
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, "../../build", 'index.html'));
    });

})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));