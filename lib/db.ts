import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "115.124.106.157",
  port: 3306,
  user: "user_sharad",
  password: "Y#9kgF%ht9j6qhiR",
  database: "db_btm_web",
  waitForConnections: true,
  connectionLimit: 10,
});

export default pool;