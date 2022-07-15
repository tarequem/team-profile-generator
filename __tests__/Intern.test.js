const Intern = require("../lib/Intern.js");

test("creates a new intern", () => {
    const intern = new Intern("bob", "1234", "th@mail.com", "45");
  
    expect(intern.school).toEqual(expect.any(String));
});
  
test("Get school information", () => {
    const intern = new Intern("bob", "1234", "th@mail.com", "45");
  
    expect(intern.getSchool()).toEqual(
        expect.stringContaining(intern.school.toString())
    );
});
  
test("Get role information", () => {
    const intern = new Intern("bob", "1234", "th@mail.com", "45");
      
    expect(intern.getRole()).toEqual("Intern");
});