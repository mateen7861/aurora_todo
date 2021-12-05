var axios = require("axios");

import * as AWS from "aws-sdk";
import { AppSyncResolverEvent } from "aws-lambda";
const db = require("data-api-client")({
  secretArn: process.env.SECRET_ARN,
  resourceArn: process.env.CLUSTER_ARN,
  database: process.env.DB_NAME,
});
exports.handler = async (event: AppSyncResolverEvent<any>) => {
  try {
    await db.query(
      `CREATE TABLE IF NOT EXISTS todos (id serial, text TEXT,completed BOOLEAN, PRIMARY KEY (id))`
    );
    const query = `SELECT * FROM Todos`;
    const todos = await db.query(query);
    return todos.records;
  } catch (err) {
    console.log("ERROR", err);
    return null;
  }
};
