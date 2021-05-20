const Intern = require("../lib/intern");

describe("Intern", () => {
  it("should return the name of the employee's school", () => {
    const school = "of rock";

    const newSchool = new Intern("thekid", 3000, "n/a", school);

    expect(newSchool.school).toEqual(school);
  });
});
