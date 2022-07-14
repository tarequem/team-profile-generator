const Intern = require("../lib/Intern.js");

test("creates a new intern", () => {
    const intern = new Intern("intern", "234", "UofT", "th@ej.com");
  
    expect(intern.name).toBe("intern");
    expect(intern.id).toBe("234");
    expect(intern.school).toBe("UofT");
    expect(intern.email).toBe("th@ej.com");
});

test('Check methods for the class', () => {
    const intern = new Intern("intern", "234", "UofT", "th@ej.com");

    expect(intern.getName()).toBe(intern.name);
    expect(intern.getId()).toBe(intern.id);
    expect(intern.getEmail()).toBe(intern.email);
    expect(intern.getSchool()).toBe(intern.school);
    expect(intern.getRole()).toBe("Intern");
})