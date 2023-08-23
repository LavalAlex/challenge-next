import { dbConfig } from "@/config/api/db";
import { createConnection, Connection } from "mysql2/promise";

export async function connectToDatabase(): Promise<Connection> {
  const connection = await createConnection(dbConfig);
  return connection;
}
