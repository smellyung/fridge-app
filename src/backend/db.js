const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://ed:faraj@cluster0-mujvx.mongodb.net/test?retryWrites=true&w=majority';
const dbName = 'test';
module.exports = { connect };

function connect() {
    //connect to db in cloud
    return new Promise((resolve) => {
        MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, mongoDB) => {
            if (err) throw err;
            const dbo = mongoDB.db(dbName);
            resolve(dbo);
        });
    });
}