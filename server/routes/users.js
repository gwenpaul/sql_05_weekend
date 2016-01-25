/**
 * Created by gwenpaul on 1/23/16.
 */
var express = require('express');
var path = require('path');
var router = express.Router();
var pg = require('pg');

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/sql_05';



module.exports = router;
