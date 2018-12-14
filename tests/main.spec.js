describe("Main", () => {
  //roda uma vez, antes do bloco
  before(function() {
    console.log("before");
  });

  //roda uma vez, depois do bloco
  after(function() {
    console.log("after");
  });

  beforeEach(function() {
    console.log("beforeEach");
  });

  afterEach(function() {
    console.log("afterEach");
  });

  it("test 1", function() {});

  it("test 2", function() {});
});
