import {
  Todo,
  MutationCreateTodoArgs,
  MutationDeleteTodoArgs,
  MutationUpdateTodoArgs,
} from "../types";

export type TestCollection = {
  fields: {
    createTodo: { arguments: MutationCreateTodoArgs; response: Todo }[];
  };
};
