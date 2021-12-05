import * as cdk from "aws-cdk-lib";
import { AuroraTodoStack } from "../lib/aurora_todo-stack";
const app: cdk.App = new cdk.App();
const deployEnv = process.env.STAGE;
const stack = new AuroraTodoStack(
  app,
  deployEnv ? deployEnv + "-AuroraTodoStack" : "AuroraTodoStack",
  { prod: deployEnv }
);
