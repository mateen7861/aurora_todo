import { TestCollection } from "./testCollectionsTypes";

export const testCollections: TestCollection = {
  fields: {
    updateTodo: [
      {
        arguments: {
          input: {
            id: 1,
            text: "Jo-Ann",
            completed: true,
          },
        },
        response: {
          id: 1,
          text: "Fionnula",
          completed: true,
        },
      },
    ],
  },
};
