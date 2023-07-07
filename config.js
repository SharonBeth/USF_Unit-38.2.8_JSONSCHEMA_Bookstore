/** Common config for bookstore. */
const db = require("./db");

// let DB_URI = `postgresql://`;
// require("dotenv").config();


let DB_URI = "postgresql://testing1:testingpassword1@localhost";

if (process.env.NODE_ENV === "test") {
  DB_URI = `${DB_URI}/books-test`;
} else {
  DB_URI = process.env.DATABASE_URL || `${DB_URI}/books`;
}

const SECRET_KEY = "testing";

const BCRYPT_WORK_FACTOR = 12;
const results = db.query(`SELECT * FROM books`)
console.log(results.rows)


module.exports = { DB_URI, SECRET_KEY, BCRYPT_WORK_FACTOR };