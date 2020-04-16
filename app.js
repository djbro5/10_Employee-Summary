const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

// ASYNCHRONOUS FUNCTION 
async function start(){
    console.log("Create the Innovation Team!");

    let teamHTML = "";
    let teamSize = "";                                               

    await inquirer.prompt(                                    
        {
            type: "number",
            message: "How many team members?",
            name: "numTeamMem"
        }
    )
    .then((data) => {
        teamSize = data.numTeamMem + 1;          
    });
    
    if (teamSize === 0){
        console.log("You have no team members!");
        return;
    }
    
        for(i = 1; i < teamSize; i++){                            

        // initialise global variables 
        let name;
        let id;
        let title;
        let email;

        await inquirer.prompt([                                   // prompt user questions
            {
                type: "input",
                message: `What is employee (${i})'s name?`,
                name: "name"
            },
            {
                type: "input",
                message: `What is the employee (${i})'s id?`,
                name: "id"
            },
            {
                type: "input",
                message: `What is the employee (${i})'s Email?`,
                name: "email"
            },
            {
                type: "list",
                message: `what the employee (${i})'s title?`,
                name: "title",
                choices: ["Engineer", "Intern", "Manager"]
            }
        ])
        .then((data) => {

            name = data.name;
            id = data.id;
            title = data.title;
            email = data.email;
        });

        // Switch to place employee
        switch (title){
            case "Manager":
                await inquirer.prompt([
                    {
                        type: "input",
                        message: "What is Manager's Office Number?",
                        name: "officeNum"                       
                    }
                ])
                .then((data) => {
                    const manager = new Manager(name, id, email, data.officeNum);
                    teamMember = fs.readFileSync("templates/manager.html");
                    teamHTML = teamHTML + "\n" + eval('`'+ teamMember +'`');                      
                });
                break;

            case "Intern":
                await inquirer.prompt([
                    {
                        type: "input",
                        message: "What school is your Intern attending?",
                        name: "school"
                    }
                ])
                .then((data) => {
                    const intern = new Intern(name, id, email, data.school);
                    teamMember = fs.readFileSync("templates/intern.html");
                    teamHTML = teamHTML + "\n" + eval('`'+ teamMember +'`');
                });
                break;

            case "Engineer":
                await inquirer.prompt([
                    {
                        type: "input",
                        message: "What is your Engineer's GitHub?",
                        name: "github"
                    }
                ])
                .then((data) => {
                    const engineer = new Engineer(name, id, email, data.github);
                    teamMember = fs.readFileSync("templates/engineer.html");
                    teamHTML = teamHTML + "\n" + eval('`'+ teamMember +'`');
                });
                break;
        } 
    } 

    const mainHTML = fs.readFileSync("templates/main.html");                      

    teamHTML = eval('`'+ mainHTML +'`');
    fs.writeFile("output/team.html", teamHTML, function(err) {                                                  // write new team.html file            
        if (err) {
          return console.log(err);
        }
        console.log("Success!");
      });
    console.log(teamHTML);
}

start();        // run application