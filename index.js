const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const {writeFile, copyFile} = require('./lib/generate-page.js');


const questions = [
    {
        type: 'list',
        name: 'role',
        message: 'Please choose a role for this employee. Note: the first record in a team must be the Manager',
        choices: ['Manager', 'Engineer', 'Intern'],
        validate: role => {
            if (team.role.includes('Manager')) {
                console.log('You can only have one manager on the team!');
                return false;
            }
            if (team[0].role !== 'Manager') {
                console.log('The first employee must be the Manager');
                return false;
            }
            if (!role) {
                console.log('You must choose an employee role');
                return false;
            }
            return true;

        }
    }
];

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
            }

            if (employee.addNew) {
                start(team);
            } 

            generateNewPage(team);

        });
};

// function generateNewPage(team) {
//     fs.writeFile('./dist/index.html', //from where?);

//     fs.copyFile('.src/style.css'

// };

start();