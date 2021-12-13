import {
  Todo,
  MutationCreateTodoArgs,
  MutationDeleteTodoArgs,
  MutationUpdateTodoArgs,
} from "../../../../types/types";

export type TestCollection = {
  fields: {
    updateTodo: { arguments: MutationUpdateTodoArgs; response: Todo }[];
  };
};
