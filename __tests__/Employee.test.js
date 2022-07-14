const Employee = require("../lib/Employee.js");
//test
test("creates a new employee", () => {
    const employee = new Employee("employee", "234", "emphub", "th@ej.com");
  
    expect(employee.name).toBe("employee");
    expect(employee.id).toBe("234");
    expect(employee.github).toBe("emphub");
    expect(employee.email).toBe("th@ej.com");
});

test('Check methods for the class', () => {
    const employee = new Employee("employee", "234", "emphub", "th@ej.com");

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Employee');
})