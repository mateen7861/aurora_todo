import { aws_appsync as appsync, CfnOutput } from "aws-cdk-lib";
import { aws_iam as iam } from "aws-cdk-lib";
import { Construct } from "constructs";
interface AppsyncProps {
  fsafasfsf_lambdaFn_listTodosArn: string;
  fsafasfsf_lambdaFn_createTodoArn: string;
  fsafasfsf_lambdaFn_deleteTodoArn: string;
  fsafasfsf_lambdaFn_updateTodoArn: string;
  prod?: string;
}

export class AppsyncConstruct extends Construct {
  public api_url: string;
  public api_key: string;

  constructor(scope: Construct, id: string, props?: AppsyncProps) {
    super(scope, id);

    const fsafasfsf_appsync: appsync.CfnGraphQLApi = new appsync.CfnGraphQLApi(
      this,
      props?.prod ? props?.prod + "fsafasfsf" : "fsafasfsf",
      {
        authenticationType: "API_KEY",
        name: props?.prod ? props?.prod + "fsafasfsf" : "fsafasfsf",
      }
    );
    const fsafasfsf_schema: appsync.CfnGraphQLSchema =
      new appsync.CfnGraphQLSchema(
        this,
        props?.prod ? props?.prod + "fsafasfsfSchema" : "fsafasfsfSchema",
        {
          apiId: fsafasfsf_appsync.attrApiId,
          definition: `scalar AWSDate
scalar AWSTime
scalar AWSDateTime
scalar AWSTimestamp
scalar AWSEmail
scalar AWSJSON
scalar AWSURL
scalar AWSPhone
scalar AWSIPAddress

type Todo {
  id: Int
  text: String!
  completed: Boolean!
}

input CreateTodoInput {
  text: String!
  completed: Boolean!
}

input UpdateTodoInput {
  id: Int
  text: String
  completed: Boolean
}

input DeleteTodoInput {
  id: Int
}

type Query {
  listTodos: [Todo]
}

type Mutation {
  createTodo(input: CreateTodoInput!): Todo
  deleteTodo(input: DeleteTodoInput!): Todo
  updateTodo(input: UpdateTodoInput!): Todo
}`,
        }
      );
    const fsafasfsf_apiKey: appsync.CfnApiKey = new appsync.CfnApiKey(
      this,
      "apiKey",
      {
        apiId: fsafasfsf_appsync.attrApiId,
      }
    );
    const fsafasfsf_serviceRole: iam.Role = new iam.Role(
      this,
      "appsyncServiceRole",
      {
        assumedBy: new iam.ServicePrincipal("appsync.amazonaws.com"),
      }
    );
    fsafasfsf_serviceRole.addToPolicy(
      new iam.PolicyStatement({
        resources: ["*"],
        actions: ["lambda:InvokeFunction"],
      })
    );

    const ds_fsafasfsf_createTodo: appsync.CfnDataSource =
      new appsync.CfnDataSource(
        this,
        props?.prod
          ? props?.prod + "fsafasfsfdataSourceGraphqlcreateTodo"
          : "fsafasfsfdataSourceGraphqlcreateTodo",
        {
          name: props?.prod
            ? props?.prod + "fsafasfsf_dataSource_createTodo"
            : "fsafasfsf_dataSource_createTodo",
          apiId: fsafasfsf_appsync.attrApiId,
          type: "AWS_LAMBDA",
          lambdaConfig: {
            lambdaFunctionArn: props!.fsafasfsf_lambdaFn_createTodoArn,
          },
          serviceRoleArn: fsafasfsf_serviceRole.roleArn,
        }
      );
    const ds_fsafasfsf_deleteTodo: appsync.CfnDataSource =
      new appsync.CfnDataSource(
        this,
        props?.prod
          ? props?.prod + "fsafasfsfdataSourceGraphqldeleteTodo"
          : "fsafasfsfdataSourceGraphqldeleteTodo",
        {
          name: props?.prod
            ? props?.prod + "fsafasfsf_dataSource_deleteTodo"
            : "fsafasfsf_dataSource_deleteTodo",
          apiId: fsafasfsf_appsync.attrApiId,
          type: "AWS_LAMBDA",
          lambdaConfig: {
            lambdaFunctionArn: props!.fsafasfsf_lambdaFn_deleteTodoArn,
          },
          serviceRoleArn: fsafasfsf_serviceRole.roleArn,
        }
      );
    const ds_fsafasfsf_updateTodo: appsync.CfnDataSource =
      new appsync.CfnDataSource(
        this,
        props?.prod
          ? props?.prod + "fsafasfsfdataSourceGraphqlupdateTodo"
          : "fsafasfsfdataSourceGraphqlupdateTodo",
        {
          name: props?.prod
            ? props?.prod + "fsafasfsf_dataSource_updateTodo"
            : "fsafasfsf_dataSource_updateTodo",
          apiId: fsafasfsf_appsync.attrApiId,
          type: "AWS_LAMBDA",
          lambdaConfig: {
            lambdaFunctionArn: props!.fsafasfsf_lambdaFn_updateTodoArn,
          },
          serviceRoleArn: fsafasfsf_serviceRole.roleArn,
        }
      );
    const ds_fsafasfsf_listTodos: appsync.CfnDataSource =
      new appsync.CfnDataSource(
        this,
        props?.prod
          ? props?.prod + "fsafasfsfdataSourceGraphqllistTodos"
          : "fsafasfsfdataSourceGraphqllistTodos",
        {
          name: props?.prod
            ? props?.prod + "fsafasfsf_dataSource_listTodos"
            : "fsafasfsf_dataSource_listTodos",
          apiId: fsafasfsf_appsync.attrApiId,
          type: "AWS_LAMBDA",
          lambdaConfig: {
            lambdaFunctionArn: props!.fsafasfsf_lambdaFn_listTodosArn,
          },
          serviceRoleArn: fsafasfsf_serviceRole.roleArn,
        }
      );
    const listTodos_resolver: appsync.CfnResolver = new appsync.CfnResolver(
      this,
      "listTodos_resolver",
      {
        apiId: fsafasfsf_appsync.attrApiId,
        typeName: "Query",
        fieldName: "listTodos",
        dataSourceName: ds_fsafasfsf_listTodos.name,
      }
    );
    listTodos_resolver.node.addDependency(fsafasfsf_schema);
    listTodos_resolver.node.addDependency(ds_fsafasfsf_listTodos);

    const createTodo_resolver: appsync.CfnResolver = new appsync.CfnResolver(
      this,
      "createTodo_resolver",
      {
        apiId: fsafasfsf_appsync.attrApiId,
        typeName: "Mutation",
        fieldName: "createTodo",
        dataSourceName: ds_fsafasfsf_createTodo.name,
      }
    );
    createTodo_resolver.node.addDependency(fsafasfsf_schema);
    createTodo_resolver.node.addDependency(ds_fsafasfsf_createTodo);

    const deleteTodo_resolver: appsync.CfnResolver = new appsync.CfnResolver(
      this,
      "deleteTodo_resolver",
      {
        apiId: fsafasfsf_appsync.attrApiId,
        typeName: "Mutation",
        fieldName: "deleteTodo",
        dataSourceName: ds_fsafasfsf_deleteTodo.name,
      }
    );
    deleteTodo_resolver.node.addDependency(fsafasfsf_schema);
    deleteTodo_resolver.node.addDependency(ds_fsafasfsf_deleteTodo);

    const updateTodo_resolver: appsync.CfnResolver = new appsync.CfnResolver(
      this,
      "updateTodo_resolver",
      {
        apiId: fsafasfsf_appsync.attrApiId,
        typeName: "Mutation",
        fieldName: "updateTodo",
        dataSourceName: ds_fsafasfsf_updateTodo.name,
      }
    );
    updateTodo_resolver.node.addDependency(fsafasfsf_schema);
    updateTodo_resolver.node.addDependency(ds_fsafasfsf_updateTodo);

    this.api_url = fsafasfsf_appsync.attrGraphQlUrl;
    this.api_key = fsafasfsf_apiKey.attrApiKey;
    new CfnOutput(
      this,
      props?.prod ? props.prod + "APIGraphQlURL" : "APIGraphQlURL",
      {
        value: fsafasfsf_appsync.attrGraphQlUrl,
        description: "The URL of the GraphQl API",
        exportName: props?.prod
          ? props.prod + "graphQlAPIURL"
          : "graphQlAPIURL",
      }
    );
    new CfnOutput(
      this,
      props?.prod ? props.prod + "GraphQLAPIKey" : "GraphQLAPIKey",
      {
        value: fsafasfsf_apiKey.attrApiKey || "",
        description: "The API Key of the GraphQl API",
        exportName: props?.prod
          ? props.prod + "graphQlAPIKey"
          : "graphQlAPIKey",
      }
    );
  }
}
