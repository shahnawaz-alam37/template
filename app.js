const express = require('express');
const bodyParser = require('body-parser');
// const mysql = require('mysql');
const app = express();

// // Configure MySQL connection
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

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});