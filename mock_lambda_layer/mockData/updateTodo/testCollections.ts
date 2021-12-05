import { TestCollection } from "./testCollectionsTypes";

export const testCollections: TestCollection = {
  fields: {
    updateTodo: [
      {
        arguments: {
          input: {
            id: 0,
            text: "Elsinore",
            completed: true,
          },
        },
        response: {
          id: 0,
          text: "Edy",
          completed: true,
        },
      },
    ],
  },
};
