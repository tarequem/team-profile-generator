const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generateHTML.js");
const teamArray = [];

//declaring classes
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");



//prompts user to enter manager information
const managerPrompt = () => {
    return inquirer
        .prompt ([
            {
                type: "input",
                name: "name",
                message: "Enter the manager's name"
            },
            {
                type: "input",
                name: "id",
                message: "Enter the manager's ID"
            },
            {
                type: "input",
                name: "email",
                message: "Enter the manager's email"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Enter the manager's office number"
            },
        ])
        .then((managerResponse) => {
            const { name, id, email, officeNumber } = managerResponse;
            const manager = new Manager(name, id, email, officeNumber);
            teamArray.push(manager);
        })
}

//prompts for engineer
const engineerPrompt = () => {
    return inquirer
        .prompt ([
            {
                type: "input",
                name: "name",
                message: "Enter the engineer's name"
            },
            {
                type: "input",
                name: "id",
                message: "Enter the engineer's ID"
            },
            {
                type: "input",
                name: "email",
                message: "Enter the engineer's email"
            },
            {
                type: "input",
                name: "github",
                message: "Enter the engineer's GitHub username"
            }
        ])
        .then((engineerResponse) => {
            const { name, id, email, github } = engineerResponse;
            const engineer = new Engineer(name, id, email, github);
            teamArray.push(engineer);
            addMember();
        })
}

//prompts for intern
const internPrompt = () => {
    return inquirer
        .prompt ([
            {
                type: "input",
                name: "name",
                message: "Enter the intern's name"
            },
            {
                type: "input",
                name: "id",
                message: "Enter the intern's ID"
            },
            {
                type: "input",
                name: "email",
                message: "Enter the intern's email"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Enter the intern's school"
            }
        ])
        .then((internResponse) => {
            const { name, id, email, school } = internResponse;
            const intern = new Intern(name, id, email, school);
            teamArray.push(intern)
            addMember();
        })
}




//prompts to start on information from list of members
//choices: [ "Choice A", new inquirer.Separator(), "choice B" ]

// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input


// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
    //done in generateHTML

// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
    //done in generateHTML

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
    //done in index.js
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
    //use inquirer.separator
    //use inquirer for the ones below
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated