// connect server with database
const Pool = require("pg").Pool; // configure connection

// use pool to update and manipulate data
const pool = new Pool({
  // how and where to connect db

  /*
	Make sure there is an .env file in api folder with the following information for the postgres database:

	PGUSER = youruser
	PGPASSWORD = yourpassword
	PGHOST = localhost
	PGPORT = 5432
	PGDATABASE = coffeechat
	*/

  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
});

module.exports = pool;
