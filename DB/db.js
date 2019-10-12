const sqlite3 = require('sqlite3').verbose();
const DBPATH = './DB/database.db';
 
// open database in memory
let db = new sqlite3.Database(DBPATH, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});
 
// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});