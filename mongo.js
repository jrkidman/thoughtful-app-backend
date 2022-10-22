const { MongoClient } = require("mongodb");
require("dotenv").config();

let db;

async function mongoConnect() {
  const uri = process.env.MONGO_DB_CONNECTION_STRING;
  const client = new MongoClient(uri);
  try {
    await client.connect();
    db = await client.db(process.env.MONGO_DATABASE);
    console.log("db connected");
  } catch (error) {
    console.error(error);
  }
}
function thoughtfulDB() {
  return db;
}
module.exports = {
  mongoConnect,
  thoughtfulDB,
};
