const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./src/generateHTML.js");
const teamArray = [];
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
};
//prompts for adding additional employees
const addMember = () => {
    return inquirer
        .prompt ([
            {
                type: "list",
                name: "role",
                message: "What role would you like to add",
                choices: ["Engineer", "Intern"]
            },
            {
                type: "input",
                name: "name",
                message: "Enter the employee's name", 
            },
            {
                type: "input",
                name: "id",
                message: "Enter the employee's ID",
            },
            {
                type: "input",
                name: "email",
                message: "Enter the employee's email",
            },
            {
                type: "input",
                name: "github",
                message: "Please enter the engineer's GitHub",
                when: (input) => input.role === "Engineer"
            },
            {
                type: "input",
                name: "school",
                message: "Please enter the intern's school",
                when: (input) => input.role === "Intern",
            },
            {
                type: "confirm",
                name: "confirmEmployee",
                message: "Would you like to add anyone else",
                default: false
            }

        ])
        .then(employeeInfo => {
       
  
            let { name, id, email, role, github, school, confirmEmployee } = employeeInfo; 
            let employee; 
    
            if (role === "Engineer") {
                employee = new Engineer (name, id, email, github);
    
                console.log(employee);
    
            } else if (role === "Intern") {
                employee = new Intern (name, id, email, school);
    
                console.log(employee);
            }
    
            teamArray.push(employee); 
    
            if (confirmEmployee) {
                return addMember(teamArray); 
            } else {
                return teamArray;
            }
        })
}

//takes team array to generateHTML script and then to writeFile function
managerPrompt()
    .then(addMember)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeToFile(pageHTML);
    })

//writes file to output as index.html
const writeToFile = data => {
    fs.writeFile("./output/index.html", data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Page has been created");
        }
    })
};