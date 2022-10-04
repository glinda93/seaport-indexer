import { Pool, PoolClient } from "pg";
import config from "../../config";

if (config.db.log) {
  require("./log");
}

export const pool = new Pool({
  connectionString: config.db.connectionUrl,
});

let connection: PoolClient | null = null;

export const getConnection = async (): Promise<PoolClient> => {
  if (connection == null) {
    connection = await pool.connect();
  }

  console.log("connected to db");

  return connection;
};
