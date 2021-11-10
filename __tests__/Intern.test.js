const Engineer = require('../lib/Engineer.js');
//const Employee = require('../lib/Employee.js');


// test to set properties

test('can set school from constructor argument', () => {
    const e = new Intern('Sam', 1, 'dog@mail.com', 'UBC');

    expect(e.school).toEqual('UBC');
});

// tests to get properties

test('can get school via getSchool()', () => {
    const e = new Engineer('Sam', 1, 'dog@mail.com', 'UBC');

    expect(e.getSchool()).toEqual(expect.stringContaining(e.school.toString()));
});


test('getRole() should return "Intern" ', () => {
    const e = new Engineer('Sam', 1, 'dog@mail.com', 'UBC');

    expect(e.getRole()).toEqual(expect.stringContaining('Intern'));
});