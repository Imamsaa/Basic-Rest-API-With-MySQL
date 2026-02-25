import mysql from 'mysql2/promise';

// Buat pool SEKALI di luar app/route
const dbpool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'restapi',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

export default dbpool;