const Manager = require("../lib/Manager.js");

test("creates a new manager", () => {
    const manager = new Manager("manager", "234", "emphub", "th@ej.com");
  
    expect(manager.name).toBe("manager");
    expect(manager.id).toBe("234");
    expect(manager.github).toBe("emphub");
    expect(manager.email).toBe("th@ej.com");
});

test('Check methods for the class', () => {
    const manager = new Manager("manager", "234", "emphub", "th@ej.com");

    expect(manager.getName()).toBe(manager.name);
    expect(manager.getId()).toBe(manager.id);
    expect(manager.getEmail()).toBe(manager.email);
    expect(manager.getRole()).toBe("Manager");
})