class Intern {
    constructor(name, id, github, email) {
        this.name = name;
        this.id = id;
        this.github = github;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;