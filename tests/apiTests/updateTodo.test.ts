import { expect } from "chai";
import supertest from "supertest";
import { AppsyncAPI } from "./AppSyncAPI";
import { testCollections } from "../../mock_lambda_layer/mockData/updateTodo/testCollections";
const { API_KEY, API_URL } = AppsyncAPI.getInstance();
const request = supertest(API_URL);
const { updateTodo } = require("./graphql/mutations");
describe("run updateTodo", () => {
  it("updateTodo works correctly", (done) => {
    const totalFields = testCollections.fields.updateTodo.length;
    for (let index = 0; index < totalFields; index++) {
      let args = testCollections.fields.updateTodo[index].arguments;
      let response = testCollections.fields.updateTodo[index].response;
      request
        .post("/")
        .set("x-api-key", API_KEY)
        .send({ query: updateTodo, variables: args })
        .end((err: any, res: any) => {
          expect(err).to.be.null;
          expect(res.status).to.equal(200);
          expect(res.body.data["updateTodo"]).to.eql(response);
          done();
        });
    }
  });
});
