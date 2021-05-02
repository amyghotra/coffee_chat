// connect server with database
const Pool = require("pg").Pool; // configure connection

// use pool to update and manipulate data
const pool = new Pool({
  // how and where to connect db
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
});

module.exports = pool;
