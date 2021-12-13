export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AWSDate: any;
  AWSDateTime: any;
  AWSEmail: any;
  AWSIPAddress: any;
  AWSJSON: any;
  AWSPhone: any;
  AWSTime: any;
  AWSTimestamp: any;
  AWSURL: any;
}

export interface CreateTodoInput {
  completed: Scalars["Boolean"];
  text: Scalars["String"];
}

export interface DeleteTodoInput {
  id?: InputMaybe<Scalars["Int"]>;
}

export interface Mutation {
  __typename?: "Mutation";
  createTodo?: Maybe<Todo>;
  deleteTodo?: Maybe<Todo>;
  updateTodo?: Maybe<Todo>;
}

export interface MutationCreateTodoArgs {
  input: CreateTodoInput;
}

export interface MutationDeleteTodoArgs {
  input: DeleteTodoInput;
}

export interface MutationUpdateTodoArgs {
  input: UpdateTodoInput;
}

export interface Query {
  __typename?: "Query";
  listTodos?: Maybe<Array<Maybe<Todo>>>;
}

export interface Todo {
  __typename?: "Todo";
  completed: Scalars["Boolean"];
  id?: Maybe<Scalars["Int"]>;
  text: Scalars["String"];
}

export interface UpdateTodoInput {
  completed?: InputMaybe<Scalars["Boolean"]>;
  id?: InputMaybe<Scalars["Int"]>;
  text?: InputMaybe<Scalars["String"]>;
}
