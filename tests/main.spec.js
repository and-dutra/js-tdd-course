import { expect } from "chai";

describe("Main", () => {
  describe("Method A", function() {
    context("Case 1", function() {
      it("Should happen bla", function() {
        //roda o teste aqui
        throw new Error("just and error");
      });
    });
    context("Case 2", function() {
      it("Should happen bla bla", function() {
        //roda o teste aqui
      });
    });
  });

  describe("Method B", function() {
    context("Case 2", function() {
      it("Should happen bla bla", function() {
        //roda o teste aqui
      });
    });
  });
});
