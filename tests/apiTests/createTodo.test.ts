import { expect } from "chai";
import supertest from "supertest";
import { AppsyncAPI } from "./AppSyncAPI";
import { testCollections } from "../../mock_lambda_layer/mockData/createTodo/testCollections";
const { API_KEY, API_URL } = AppsyncAPI.getInstance();
const request = supertest(API_URL);
const { createTodo } = require("./graphql/mutations");
describe("run createTodo", () => {
  it("createTodo works correctly", (done) => {
    const totalFields = testCollections.fields.createTodo.length;
    for (let index = 0; index < totalFields; index++) {
      let args = testCollections.fields.createTodo[index].arguments;
      let response = testCollections.fields.createTodo[index].response;
      request
        .post("/")
        .set("x-api-key", API_KEY)
        .send({ query: createTodo, variables: args })
        .end((err: any, res: any) => {
          expect(err).to.be.null;
          expect(res.status).to.equal(200);
          expect(res.body.data["createTodo"]).to.eql(response);
          done();
        });
    }
  });
});
