var axios = require("axios");

import * as AWS from "aws-sdk";
import {MutationCreateTodoArgs,Todo} from "../../../types/types"
import { AppSyncResolverEvent } from "aws-lambda";
const db = require("data-api-client")({
  secretArn: process.env.SECRET_ARN,
  resourceArn: process.env.CLUSTER_ARN,
  database: process.env.DB_NAME,
});

exports.handler = async (event: AppSyncResolverEvent<MutationCreateTodoArgs>):Promise<Todo|null> => {
  const result = await createTodo(event.arguments,db)
  return result
};

async function createTodo(args:MutationCreateTodoArgs,db:any):Promise<Todo|null>{
  const {text,completed} = args.input
  try {
    await db.query(
      `CREATE TABLE IF NOT EXISTS todos (id serial, text TEXT,completed BOOLEAN, PRIMARY KEY (id))`
    );
    const todo = await db.query(`INSERT INTO todos (text,completed) VALUES(:text,:completed) RETURNING *`, { text, completed });

    // return todo.records[0]

      return {
        completed:todo.records[0].completed,
        id:todo.records[0].id ,
        text: todo.records[0].text
      }
  } catch (err) {
    console.log("ERROR", err);
    return null;
  }
}
