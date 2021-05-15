const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  it("should return employee's github username", () => {
    //arrange
    const github = "blobhub";

    //act
    const newGithub = new Engineer("blob", 123, "email@email.com", github);

    //assert
    expect(newGithub.github).toEqual(github);
  });
});
