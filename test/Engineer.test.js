const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  it("should return employee's github username", () => {
    const github = "blobhub";

    const newGithub = new Engineer("blob", 123, "email@email.com", github);

    expect(newGithub.github).toEqual(github);
  });
});
