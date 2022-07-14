const Engineer = require("../lib/Engineer.js");

test("creates a new engineer", () => {
    const engineer = new Engineer("engineer", "234", "emphub", "th@ej.com");
  
    expect(engineer.name).toBe("engineer");
    expect(engineer.id).toBe("234");
    expect(engineer.github).toBe("emphub");
    expect(engineer.email).toBe("th@ej.com");
});

test('Check methods for the class', () => {
    const engineer = new Engineer("engineer", "234", "emphub", "th@ej.com");

    expect(engineer.getName()).toBe(engineer.name);
    expect(engineer.getId()).toBe(engineer.id);
    expect(engineer.getEmail()).toBe(engineer.email);
    expect(engineer.getRole()).toBe("Engineer");
})