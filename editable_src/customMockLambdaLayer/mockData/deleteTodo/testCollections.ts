import { TestCollection } from "./testCollectionsTypes";

export const testCollections: TestCollection = {
  fields: {
    deleteTodo: [
      {
        arguments: {
          input: {
            id: 1,
          },
        },
        response: {
          id: 1,
          text: "Regine",
          completed: true,
        },
      },
    ],
  },
};
