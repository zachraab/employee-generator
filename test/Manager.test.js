const Manager = require("../lib/manager");

describe("Manager", () => {
  it("should return employee's office number", () => {
    const officeNumber = 1;

    const newOfficeNumber = new Manager("Santa", 32, "email", officeNumber);

    expect(newOfficeNumber.officeNumber).toEqual(officeNumber);
  });
});
