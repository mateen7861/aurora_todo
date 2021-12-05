import {
  Todo,
  MutationCreateTodoArgs,
  MutationDeleteTodoArgs,
  MutationUpdateTodoArgs,
} from "../types";

export type TestCollection = {
  fields: {
    deleteTodo: { arguments: MutationDeleteTodoArgs; response: Todo }[];
  };
};
