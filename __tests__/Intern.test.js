const Intern = require("../lib/Intern.js");

test("creates a new intern", () => {
    const intern = new Intern("intern");
  
    expect(intern.name).toBe("");
    expect(intern.id).toBe("");
    expect(intern.github).toBe("");
    expect(intern.email).toBe("");
});