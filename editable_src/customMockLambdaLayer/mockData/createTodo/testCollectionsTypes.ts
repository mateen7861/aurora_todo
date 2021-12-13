import {
  Todo,
  MutationCreateTodoArgs,
  MutationDeleteTodoArgs,
  MutationUpdateTodoArgs,
} from "../../../../types/types";

export type TestCollection = {
  fields: {
    createTodo: { arguments: MutationCreateTodoArgs; response: Todo }[];
  };
};
