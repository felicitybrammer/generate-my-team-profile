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
    // if manager get office number
    //if engineer get github
    //if intern get school
    {}
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

 function generateNewPage(team) {
     fs.writeFile('./dist/index.html', //from where?);

     fs.copyFile('.src/style.css'


        const writeFile = fileContent => {
            return new Promise((resolve, reject) => {
                fs.writeFile('./dist/index.html', fileContent, err => {
                    if (err) {
                        reject(err);
                        return;
                    }

                    resolve({
                        ok: true,
                        message: 'File created!'
                    });
                });
            });
        };

        const copyFile = () => {
            return new Promise((resolve, reject) => {
                fs.copyFile('./src/style.css', './dist/style.css', err => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    
                    resolve({
                        ok: true,
                        message: 'File copied!'
                    });
            
            });
            });
        };
 };

start();