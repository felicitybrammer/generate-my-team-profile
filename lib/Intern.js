const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, email, id);
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }  

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;
