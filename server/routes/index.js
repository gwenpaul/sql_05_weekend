var express = require('express');
var path = require('path');
var pg = require('pg');
var router = express.Router();

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/sql_05';

router.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '../public/views/index.html'));

});

//not sure if the whack is necessary
router.get('/*', function(request, response){
    response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

router.get('/users', function(request, response){
    var results = [];
    pg.connect(connectionString, function(err, client, done){

        if(err) {
            console.log(err);
        }

        var query = client.query('SELECT * FROM users');

        query.on('row', function(row) {
            results.push(row);
        });

        query.on('end', function() {
           client.end();
            return response.json(results);
        });
    });
});

router.get('/getaddresses', function(request, response){
    var results = [];

    pg.connect(connectionString, function(err, client, done){

        if(err) {
            console.log(err);
        }
        var query = client.query('SELECT * FROM users LEFT OUTER JOIN addresses ON users.id = adresses.user_id')
        query.on('row', function(row) {
            results.push(row);
    });
        query.on('row', function(row) {
            temporaryResults.push(row);
        });

        query.on('end', function() {
            client.end();
            return response.json(temporaryResults);
        });
    });
    console.log("server-side");
});

router.get('/*', function(request, response){
    response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

module.exports = router;