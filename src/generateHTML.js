//generates html for manager
const managerHTML = function (manager) {
    return `
            <div class = "border border-primary p-2">
                <div class = "bg-primary">
                    <h3>${manager.name}</h3>
                    <h3>Manager</h3>
                </div>
                <p>ID: ${manager.id}</p>
                <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Office Number: ${manager.officeNumber}</p>
            </div>

    `
}
//generates html for engineer
const engineerHTML = function (engineer) {
    return `
            <div class = "border border-primary p-2">
                <div class = "bg-primary">
                    <h3>${engineer.name}</h3>
                    <h3>Engineer</h3>
                </div>
                <p>ID: ${engineer.id}</p>
                <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p>GitHub: ${engineer.github}</p>
            </div>
    `
}

const internHTML = function (intern) {
    return `
            <div class = "border border-primary p-2">
                <div class = "bg-primary">
                    <h3>${intern.name}</h3>
                    <h3>Intern</h3>
                </div>
                <p>ID: ${intern.id}</p>
                <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p>School: ${intern.school}</p>
            </div>
    `
}
//sends generated html into profiles for indexHTML
generateHTML = (data) => {
    profileArray = [];
    //retrieves saved profiles
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const empRole = employee.getRole();
        //manager profiles
        if (empRole === "Manager") {
            const managerProfile = managerHTML(employee);
            profileArray.push(managerProfile);
        }
        //engineer profiles
        if (empRole === "Engineer") {
            const engineerProfile = engineerHTML(employee);
            profileArray.push(engineerProfile);
        }
        //intern profiles
        if (empRole === "Intern") {
            const internProfile = internHTML(employee);
            profileArray.push(internProfile);
        }
    }
    //join profile strings and generate html
    const employeeProfiles = profileArray.join("")
    const generateTeam = indexHTML(employeeProfiles);
    return generateTeam
}
//default template of page. html of profiles will be inserted in designated container div
const indexHTML = function (employeeProfiles) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
    />
    <link
        href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
        rel="stylesheet"
    />
        <title>Your Team Page</title>
    </head>
    <body>
        <div>
            <header class="bg-primary text-xl-left">
                <h1 class = "text-center">Introducing the Team!</h1>
            </header>
        </div>
        <div class="container d-flex flex-row">
            ${employeeProfiles}
        </div>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    </body>
    </html>`
}

module.exports = generateHTML;