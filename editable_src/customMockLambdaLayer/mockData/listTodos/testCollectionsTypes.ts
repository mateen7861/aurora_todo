import {
  Todo,
  MutationCreateTodoArgs,
  MutationDeleteTodoArgs,
  MutationUpdateTodoArgs,
} from "../types";

export type TestCollection = {
  fields: { listTodos: { arguments: {}; response: Todo[] }[] };
};
