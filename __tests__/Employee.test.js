const Employee = require("../lib/Employee.js");
//test
test("creates a new employee", () => {
    const employee = new Employee('employee');
  
    expect(employee.name).toBe("");
    expect(employee.id).toBe("");
    expect(employee.github).toBe("");
    expect(employee.email).toBe("");
});