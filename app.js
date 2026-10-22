const mysql2 = require('mysql2/promise');//import mysql2 library for promise-based MySQL connections
const express = require('express'); //import express library for creating the server
var app = express(); //create an instance of the express application
app.listen(3000, () => {
  console.log('Server is running on port 3000'); //log a message when the server starts
});

// Create a connection pool to the MySQL database

const pool = mysql2.createPool({
  host: 'localhost', // Database host
  user: 'Feb22second', // Database user
  password: 'wcu17d5198', // Database password
  database: 'feb22second', // Database name 

  }
);
pool.getConnection()
  .then((connection) => {
    console.log('Connected to the database'); //log a message when the connection is successful 
    connection.release(); //release the connection back to the pool
    });
