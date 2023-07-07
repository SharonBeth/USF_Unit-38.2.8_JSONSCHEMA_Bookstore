/** Database config for database. */


const pg = require("pg");
// const { DB_URI } = require("./config");
// 
// let db = new Client({
// connectionString: DB_URI
// });
// 
// db.connect();


// module.exports = db;

const db = new pg.Client({
  host: "localhost",
  user: "testing1",
  port: 5432,
  password: "testingpassword1",
  database: "test_books"
})

db.connect();
// async function test() {
// const sound = await db.query(`SELECT * FROM books`)
// return (sound.rows)
// }
// test()
// 
module.exports = db;

