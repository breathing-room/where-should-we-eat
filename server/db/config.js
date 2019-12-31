
const mysql = require('mysql');
const dotenv = require('dotenv');
// const SSL = require('../../BaltimoreCyberTrustRoot.crt.pem');

dotenv.config();
// ^^^ injects the dotenv package into our project configuration
// process.env now has the keys and values defined in .env

const {
  DB_HOST,
  DB_PORT,
  USER_NAME,
  USER_PASS,
  DATABASE,
} = process.env;

// module.exports = {
//   host: DB_HOST,
//   user: USER_NAME,
//   password: USER_PASS,
//   database: DATABASE,
// };

const connection = mysql.createConnection({
  host: DB_HOST,
  user: USER_NAME,
  password: USER_PASS,
  database: DATABASE,
  port: DB_PORT,
  // ssl: { ca: fs.readFileSync({ ca- cert filename }) }
});

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   // database: DATABASE,
//   // port: DB_PORT,
//   // ssl: { ca: fs.readFileSync({ ca- cert filename }) }
// });

// create connection
connection.connect((err) => {
  if (err) throw err;
  console.log(`Connected to database ${DATABASE} on ${DB_PORT}`);
});

module.exports.connection = connection;

