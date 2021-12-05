import { expect } from "chai";
import supertest from "supertest";
import { AppsyncAPI } from "./AppSyncAPI";
import { testCollections } from "../../mock_lambda_layer/mockData/deleteTodo/testCollections";
const { API_KEY, API_URL } = AppsyncAPI.getInstance();
const request = supertest(API_URL);
const { deleteTodo } = require("./graphql/mutations");
describe("run deleteTodo", () => {
  it("deleteTodo works correctly", (done) => {
    const totalFields = testCollections.fields.deleteTodo.length;
    for (let index = 0; index < totalFields; index++) {
      let args = testCollections.fields.deleteTodo[index].arguments;
      let response = testCollections.fields.deleteTodo[index].response;
      request
        .post("/")
        .set("x-api-key", API_KEY)
        .send({ query: deleteTodo, variables: args })
        .end((err: any, res: any) => {
          expect(err).to.be.null;
          expect(res.status).to.equal(200);
          expect(res.body.data["deleteTodo"]).to.eql(response);
          done();
        });
    }
  });
});
