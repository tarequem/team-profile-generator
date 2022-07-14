const Manager = require("../lib/Manager.js");

test("creates a new manager", () => {
    const manager = new Manager('manager');
  
    expect(manager.name).toBe("");
    expect(manager.id).toBe("");
    expect(manager.github).toBe("");
    expect(manager.email).toBe("");
});