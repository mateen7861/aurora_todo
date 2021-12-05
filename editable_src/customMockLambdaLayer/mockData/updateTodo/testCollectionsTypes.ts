import {
  Todo,
  MutationCreateTodoArgs,
  MutationDeleteTodoArgs,
  MutationUpdateTodoArgs,
} from "../types";

export type TestCollection = {
  fields: {
    updateTodo: { arguments: MutationUpdateTodoArgs; response: Todo }[];
  };
};
