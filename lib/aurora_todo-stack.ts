import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { AppsyncConstruct } from "./AppsyncConstruct";
import { AuroraDBConstruct } from "./AuroraDBConstruct";
import { AspectController } from "../editable_src/aspects/AspectController";
import { aws_lambda as lambda } from "aws-cdk-lib";
import { aws_ec2 as ec2 } from "aws-cdk-lib";

interface EnvProps {
  prod?: string;
}

export class AuroraTodoStack extends Stack {
  constructor(scope: Construct, id: string, props?: EnvProps) {
    super(scope, id);

    const fsafasfsf_auroradb: AuroraDBConstruct = new AuroraDBConstruct(
      this,
      "AuroraDBConstruct",
      { prod: props?.prod }
    );
    const fsafasfsf_lambdaLayer: lambda.LayerVersion = new lambda.LayerVersion(
      this,
      "fsafasfsfLambdaLayer",
      {
        code: lambda.Code.fromAsset("editable_src/lambdaLayer"),
      }
    );
    const fsafasfsf_mock_lambdaLayer: lambda.LayerVersion =
      new lambda.LayerVersion(this, "fsafasfsfMockLambdaLayer", {
        code: lambda.Code.fromAsset("mock_lambda_layer"),
      });
    const fsafasfsf_lambdaFn_listTodos: lambda.Function = new lambda.Function(
      this,
      "fsafasfsfLambdalistTodos",
      {
        functionName: props?.prod
          ? props?.prod + "-fsafasfsfLambdalistTodos"
          : "fsafasfsfLambdalistTodos",
        runtime: lambda.Runtime.NODEJS_12_X,
        handler: "index.handler",
        code: lambda.Code.fromAsset("editable_src/lambda_stubs/listTodos"),
        layers: [fsafasfsf_lambdaLayer],
        role: fsafasfsf_auroradb.serviceRole,
        vpc: fsafasfsf_auroradb.vpcRef,

        environment: {
          SECRET_ARN: fsafasfsf_auroradb.SECRET_ARN,
          CLUSTER_ARN: fsafasfsf_auroradb.CLUSTER_ARN,
          DB_NAME: fsafasfsf_auroradb.DB_NAME,
        },
      }
    );
    fsafasfsf_auroradb.db_cluster.grantDataApiAccess(
      fsafasfsf_lambdaFn_listTodos
    );

    const fsafasfsf_lambdaFn_createTodo: lambda.Function = new lambda.Function(
      this,
      "fsafasfsfLambdacreateTodo",
      {
        functionName: props?.prod
          ? props?.prod + "-fsafasfsfLambdacreateTodo"
          : "fsafasfsfLambdacreateTodo",
        runtime: lambda.Runtime.NODEJS_12_X,
        handler: "index.handler",
        code: lambda.Code.fromAsset("editable_src/lambda_stubs/createTodo"),
        layers: [fsafasfsf_lambdaLayer],
        role: fsafasfsf_auroradb.serviceRole,
        vpc: fsafasfsf_auroradb.vpcRef,

        environment: {
          SECRET_ARN: fsafasfsf_auroradb.SECRET_ARN,
          CLUSTER_ARN: fsafasfsf_auroradb.CLUSTER_ARN,
          DB_NAME: fsafasfsf_auroradb.DB_NAME,
        },
      }
    );
    fsafasfsf_auroradb.db_cluster.grantDataApiAccess(
      fsafasfsf_lambdaFn_createTodo
    );

    const fsafasfsf_lambdaFn_deleteTodo: lambda.Function = new lambda.Function(
      this,
      "fsafasfsfLambdadeleteTodo",
      {
        functionName: props?.prod
          ? props?.prod + "-fsafasfsfLambdadeleteTodo"
          : "fsafasfsfLambdadeleteTodo",
        runtime: lambda.Runtime.NODEJS_12_X,
        handler: "index.handler",
        code: lambda.Code.fromAsset("editable_src/lambda_stubs/deleteTodo"),
        layers: [fsafasfsf_lambdaLayer],
        role: fsafasfsf_auroradb.serviceRole,
        vpc: fsafasfsf_auroradb.vpcRef,

        environment: {
          SECRET_ARN: fsafasfsf_auroradb.SECRET_ARN,
          CLUSTER_ARN: fsafasfsf_auroradb.CLUSTER_ARN,
          DB_NAME: fsafasfsf_auroradb.DB_NAME,
        },
      }
    );
    fsafasfsf_auroradb.db_cluster.grantDataApiAccess(
      fsafasfsf_lambdaFn_deleteTodo
    );

    const fsafasfsf_lambdaFn_updateTodo: lambda.Function = new lambda.Function(
      this,
      "fsafasfsfLambdaupdateTodo",
      {
        functionName: props?.prod
          ? props?.prod + "-fsafasfsfLambdaupdateTodo"
          : "fsafasfsfLambdaupdateTodo",
        runtime: lambda.Runtime.NODEJS_12_X,
        handler: "index.handler",
        code: lambda.Code.fromAsset("editable_src/lambda_stubs/updateTodo"),
        layers: [fsafasfsf_lambdaLayer],
        role: fsafasfsf_auroradb.serviceRole,
        vpc: fsafasfsf_auroradb.vpcRef,

        environment: {
          SECRET_ARN: fsafasfsf_auroradb.SECRET_ARN,
          CLUSTER_ARN: fsafasfsf_auroradb.CLUSTER_ARN,
          DB_NAME: fsafasfsf_auroradb.DB_NAME,
        },
      }
    );
    fsafasfsf_auroradb.db_cluster.grantDataApiAccess(
      fsafasfsf_lambdaFn_updateTodo
    );

    const fsafasfsf: AppsyncConstruct = new AppsyncConstruct(
      this,
      "fsafasfsfAppsyncConstruct",
      {
        fsafasfsf_lambdaFn_listTodosArn:
          fsafasfsf_lambdaFn_listTodos.functionArn,
        fsafasfsf_lambdaFn_createTodoArn:
          fsafasfsf_lambdaFn_createTodo.functionArn,
        fsafasfsf_lambdaFn_deleteTodoArn:
          fsafasfsf_lambdaFn_deleteTodo.functionArn,
        fsafasfsf_lambdaFn_updateTodoArn:
          fsafasfsf_lambdaFn_updateTodo.functionArn,
        prod: props?.prod,
      }
    );
    new AspectController(this, props?.prod);
  }
}
