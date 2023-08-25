import { createConnection, Connection } from "mysql2/promise";
import { dbConfig } from "@/config/api/db";

export async function connectToDatabase(): Promise<Connection> {
  const connection = await createConnection(dbConfig);
  return connection;
}
