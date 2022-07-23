// Import the sequelize constructor from the library
const Sequelize = require('sequelize');
// Load environment variables, either from .env for local or from host (like Heroku)
require('dotenv').config();

// create connection to our database
let sequelize;

// Heroku uses JAWS
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306,
        }
    );
}

module.exports = sequelize;
