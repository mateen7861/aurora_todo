import { expect } from "chai";
import supertest from "supertest";
import { AppsyncAPI } from "./AppSyncAPI";
import { testCollections } from "../../mock_lambda_layer/mockData/listTodos/testCollections";
const { API_KEY, API_URL } = AppsyncAPI.getInstance();
const request = supertest(API_URL);
const { listTodos } = require("./graphql/queries");
describe("run listTodos", () => {
  it("listTodos works correctly", (done) => {
    const totalFields = testCollections.fields.listTodos.length;
    for (let index = 0; index < totalFields; index++) {
      let args = testCollections.fields.listTodos[index].arguments;
      let response = testCollections.fields.listTodos[index].response;
      request
        .post("/")
        .set("x-api-key", API_KEY)
        .send({ query: listTodos, variables: args })
        .end((err: any, res: any) => {
          expect(err).to.be.null;
          expect(res.status).to.equal(200);
          expect(res.body.data["listTodos"]).to.eql(response);
          done();
        });
    }
  });
});
