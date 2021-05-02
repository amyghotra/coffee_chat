const dotenv = require("dotenv");
const { Pool, Client } = require("pg");
const { RDS } = require("aws-sdk");
const { sign } = require("jsonwebtoken");

dotenv.config();

const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
});

// // const pool = new Client(conStr);
// pool.connect().then(() => console.log('hi'))

// const signerOptions = {
//   credentials: {
//     accessKeyId: process.env.AWS_ACCESS_KEY,
//     secretAccessKey: process.env.AWS_SECRET_KEY,
//   },
//   region: 'us-east-1',
//   hostname: process.env.AWS_DB_HOST,
//   port: 5432,
//   username: process.env.PGUSER,
// }

// const signer = new RDS.Signer();

// const getPassword = () => signer.getAuthToken(signerOptions);

// const pool = new Pool({
//   host: signerOptions.hostname,
//   port: signerOptions.port,
//   user: signerOptions.username,
//   password: getPassword,
// })

// pool.connect();

module.exports = pool;
