const mysql = require('mysql2/promise');
require('dotenv').config();
const secret = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

Object.seal(secret)
module.exports = secret;
   

if (!secret.host || !secret.user || !secret.database) {
    console.log('There is an error in your secret connection');
} else {
    const pool = mysql.createPool({
        host: secret.host,
        user: secret.user,
        password: secret.password,
        database: secret.database,
        waitForConnections: true,
        connectionLimit: 10, // Adjust the limit based on your needs
        queueLimit: 0, // No limit on the connection queue
    });

    // Testing the connection pool
    pool.query('SELECT 1')
        .then(() => {
            console.log('Database Connected');
        })
        .catch((err) => {
            console.log('Database Connection Error:', err.message);
        });

    module.exports = pool;
}
