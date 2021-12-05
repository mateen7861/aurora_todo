import { TestCollection } from "./testCollectionsTypes";

export const testCollections: TestCollection = {
  fields: {
    deleteTodo: [
      {
        arguments: {
          input: {
            id: 0,
          },
        },
        response: {
          id: 0,
          text: "Ashien",
          completed: true,
        },
      },
    ],
  },
};
