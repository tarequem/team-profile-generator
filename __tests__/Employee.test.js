const Employee = require("../lib/Employee.js");
//test
test("creates a new employee object", () => {
    const employee = new Employee("bob", "1234", "th@mail.com");
  
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

test("Grabs employee name", () => {
    const employee = new Employee("bob", "1234", "th@mail.com");

    expect(employee.name).toEqual(expect.any(String));
});

test("Grabs employee ID", () => {
    const employee = new Employee("bob", "1234", "th@mail.com");

    expect(employee.id).toEqual(expect.any(String));
});

test("Grabs employee email", () => {
    const employee = new Employee("bob", "1234", "th@mail.com");

    expect(employee.email).toEqual(expect.any(String));
});

test("Grabs employee role", () => {
    const employee = new Employee("bob", "1234", "th@mail.com");

    expect(employee.getRole()).toEqual("Employee");
});
