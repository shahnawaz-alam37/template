const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// const mysql = require('mysql'); use this if your are using a mysql database
// const mongoose = require('mongoose'); use this if your are using a mongoose database

// const studentmodel = require('/models/student');
// importing the model of the student from models directory


// //Configure MySQL connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'student_db'
// });

// // Connect to MySQL
// db.connect((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('Connected to MySQL database!');
// });

//server static files from the pubilc directory
app.use(express.static(__dirname + '/public'));

// Configure EJS as the view engine
app.set('view engine', 'ejs');

// Configure body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Student Database Management' });
});

app.get('/next',(req, res) => {
    res.render('next', { title: 'next page', uname:'new page' });
});

// Start the server on localhost at port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});