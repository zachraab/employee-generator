const Employee = require("../lib/employee.js");

describe("Employee", () => {
  it("should return name of employee", () => {
    const name = "blob";

    const newEmployee = new Employee(name);

    expect(newEmployee.name).toEqual(name);
  });

  it("should return id of employee", () => {
    const id = 123;

    const newID = new Employee("blob", id);

    expect(newID.id).toEqual(id);
  });

  it("should return email of employee", () => {
    const email = "email@email.com";

    const newEmail = new Employee("blob", 123, email);

    expect(newEmail.email).toEqual(email);
  });
});
