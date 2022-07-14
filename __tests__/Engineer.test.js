const Engineer = require("../lib/Engineer.js");

test("creates a new engineer", () => {
    const engineer = new Engineer('engineer');
  
    expect(engineer.name).toBe("");
    expect(engineer.id).toBe("");
    expect(engineer.github).toBe("");
    expect(engineer.email).toBe("");
});