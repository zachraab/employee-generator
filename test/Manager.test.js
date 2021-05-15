const Manager = require("../lib/manager");

describe("Manager", () => {
  it("should return employee's office number", () => {
    //arrange
    const officeNumber = 1;

    //act
    const newOfficeNumber = new Manager("Santa", 32, "email", officeNumber);

    //assert
    expect(newOfficeNumber.officeNumber).toEqual(officeNumber);
  });
});
