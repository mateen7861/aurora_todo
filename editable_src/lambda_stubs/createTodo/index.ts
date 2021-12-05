var axios = require("axios");

import * as AWS from "aws-sdk";
import { AppSyncResolverEvent } from "aws-lambda";
const db = require("data-api-client")({
  secretArn: process.env.SECRET_ARN,
  resourceArn: process.env.CLUSTER_ARN,
  database: process.env.DB_NAME,
});
exports.handler = async (event: AppSyncResolverEvent<any>) => {
  const { text, completed } = event.arguments.input;
  try {
    await db.query(
      `CREATE TABLE IF NOT EXISTS todos (id serial, text TEXT,completed BOOLEAN, PRIMARY KEY (id))`
    );
    const todo = await db.query(`INSERT INTO todos (text,completed) VALUES(:text,:completed) RETURNING *`, { text, completed });
    return todo.records[0];
  } catch (err) {
    console.log("ERROR", err);
    return null;
  }
};
