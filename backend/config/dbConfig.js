const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'madbasharafzal',  
    password: 'MySQL@123',   
    database: 'sleep_app_db' // The database you created
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');
});

module.exports = connection;
