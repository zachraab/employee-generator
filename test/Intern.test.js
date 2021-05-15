const Intern = require("../lib/intern");

describe("Intern", () => {
  it("should return the name of the employee's school", () => {
    //arrange
    const school = "of rock";

    //act
    const newSchool = new Intern("thekid", 3000, "n/a", school);

    //assert
    expect(newSchool.school).toEqual(school);
  });
});
