import { TestCollection } from "./testCollectionsTypes";

export const testCollections: TestCollection = {
  fields: {
    listTodos: [
      {
        arguments: {},
        response: [
          {
            id: 1,
            text: "Cari",
            completed: true,
          },
          {
            id: 2,
            text: "Emmy",
            completed: true,
          },
          {
            id: 3,
            text: "Cthrine",
            completed: true,
          },
        ],
      },
    ],
  },
};
