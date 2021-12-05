import { TestCollection } from "./testCollectionsTypes";

export const testCollections: TestCollection = {
  fields: {
    createTodo: [
      {
        arguments: {
          input: {
            text: "Ashleigh",
            completed: true,
          },
        },
        response: {
          id: 0,
          text: "Meta",
          completed: true,
        },
      },
    ],
  },
};
