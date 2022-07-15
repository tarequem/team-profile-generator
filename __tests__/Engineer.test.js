const Engineer = require("../lib/Engineer.js");

test("creates a new engineer", () => {
    const engineer = new Engineer("bob", "1234", "th@mail.com", "45", "Engineer");
  
    expect(engineer.github).toEqual(expect.any(String));
});
  
test("Get github information", () => {
    const engineer = new Engineer("bob", "1234", "th@mail.com", "45", "Engineer");
  
    expect(engineer.getGithub()).toEqual(
        expect.stringContaining(engineer.github.toString())
    );
});
  
test("Get role information", () => {
    const engineer = new Engineer("bob", "1234", "th@mail.com", "45", "Engineer");
      
    expect(engineer.getRole()).toEqual("Engineer");
});