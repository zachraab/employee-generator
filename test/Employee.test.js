const Employee = require("../lib/employee.js");

describe("Employee", () => {
  it("should return name of employee", () => {
    //arrange
    const name = "blob";

    //act                           only first argument needed for now
    const newEmployee = new Employee(name);

    //assert

    expect(newEmployee.name).toEqual(name);
  });

  it("should return id of employee", () => {
    //arrange
    const id = 123;

    //act
    const newID = new Employee("blob", id);

    //arrange
    expect(newID.id).toEqual(id);
  });

  it("should return email of employee", () => {
    //arrange
    const email = "email@email.com";

    //act
    const newEmail = new Employee("blob", 123, email);

    //arrange
    expect(newEmail.email).toEqual(email);
  });
});
