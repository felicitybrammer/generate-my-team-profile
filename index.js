const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateTemplate = require('./src/page-template');
let team;
const fs = require('fs');

const questions = [
    {
        type: 'list',
        name: 'role',
        message: 'Please choose a role for this employee. Note: the first record in a team must be the Manager',
        choices: ['Manager', 'Engineer', 'Intern'],
        validate: role => {
            // if (team.role.includes('Manager')) {
            //     console.log('You can only have one manager on the team!');
            //     return false;
            // }
            // if (team[0].role !== 'Manager') {
            //     console.log('The first employee must be the Manager');
            //     return false;
            // }
            if (!role) {
                console.log('You must choose an employee role');
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'name',
        message: "Please give the employee's name",
        validate: name => {
           if (name) return true;
           console.log('You must enter an employee name');
           return false;     
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please give the employee's id",
        validate: id => {
            if (id) return true;
            console.log('You must enter an employee id (Numeric)');
            return false;
        }
    },
    {   
        type: 'input',   
        name: 'email',
        message: "Please give the employee's email address",
        validate: email => {
            if (email) return true;
            console.log('You must enter an employee email address');
            return false;
        }
    },
    { 
        // if manager get office number
        type: 'input',
        name: 'officeNumber',
        message: "FOR MANAGERS ONLY. Please enter the employee's office number",
        when: ({role}) => {
            if (role === 'Manager') return true;
            return false;
        }
    },
    {
        //if engineer get github  
        type: 'input',
        name: 'github',
        message: "FOR ENGINEERS ONLY. Please enter the employee's github username",
        when: ({role}) => {
            if (role === 'Engineer') return true;
            return false;
        }
    },
    {
        //if intern get school
        type: 'input',
        name: 'school',
        message: "FOR INTERNS ONLY. Please enter the name of the employee's school",
        when: ({role}) => {
            if (role === 'Intern') return true;
            return false;
        }
    },
    {
        //ask to add another employee
        type: 'confirm',
        name: 'addNew',
        message: 'Add another employee?',
        default: false
    } 
];

// create the team array of employees
function start() {
    if (!team) {
        team = [];
    }
    inquirer
        .prompt(questions)
        .then(({role, ...employee}) => {
            switch (role) {
                case 'Manager': 
                    team.push(new Manager(employee.name, employee.id, employee.email, employee.officeNumber));
                    break;
                case 'Engineer':
                    team.push(new Engineer(employee.name, employee.id, employee.email, employee.github));
                    break;
                case 'Intern':
                    team.push(new Intern(employee.name, employee.id, employee.email, employee.school));
                    break;
            }

            if (employee.addNew) {
                start(team);
            } else {
                //console.log(generateTeam(team))
                generateNewPage(team)
            }
        });
};

// generate html with values from inquirer prompts
function generateNewPage(team) {
    const fileContent = generateTemplate(team);
    //console.log(fileContent);
     fs.writeFile('./dist/index.html', fileContent, err => {
         if (err)
          throw err;
     });

     fs.copyFile('./src/style.css', './dist/style.css', err => {
         if (err)
            throw err;
     });

};
    
start();