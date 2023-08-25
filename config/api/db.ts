const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

export const dbConfig = {
  host: DB_HOST,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
};