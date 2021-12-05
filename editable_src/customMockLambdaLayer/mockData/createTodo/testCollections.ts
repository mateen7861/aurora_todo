import { TestCollection } from "./testCollectionsTypes";

export const testCollections: TestCollection = {
  fields: {
    createTodo: [
      {
        arguments: {
          input: {
            text: "Kiele",
            completed: true,
          },
        },
        response: {
          id: 1,
          text: "Alys",
          completed: true,
        },
      },
    ],
  },
};
