const Manager = require("../lib/Manager.js");

test("creates a new manager", () => {
    const manager = new Manager("bob", "1234", "th@mail.com", "45", "Manager");
  
    expect(manager.officeNumber).toEqual(expect.any(String));
});
  
test("Get office number", () => {
    const manager = new Manager("bob", "1234", "th@mail.com", "45", "Manager");
  
    expect(manager.getOfficeNumber()).toEqual(
        expect.stringContaining(manager.officeNumber.toString())
    );
});
  
test("Get role information", () => {
    const manager = new Manager("bob", "1234", "th@mail.com", "45", "Manager");
      
    expect(manager.getRole()).toEqual("Manager");
});