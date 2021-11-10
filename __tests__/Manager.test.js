const Manager = require('../lib/Manager.js');
//const Employee = require('../lib/Employee.js');


// test to set properties

test('can set office number from constructor argument', () => {
    const e = new Manager('Sam', 1, 'dog@mail.com', 100);

    expect(e.officeNumber).toEqual(100);
});

// tests to get properties

test('can get office number via getOffice()', () => {
    const e = new Manager('Sam', 1, 'dog@mail.com', 100);

    expect(e.getOffice()).toEqual(expect.any(Number));
});


test('getRole() should return "Manager" ', () => {
    const e = new Manager('Sam', 1, 'dog@mail.com', 100);

    expect(e.getRole()).toEqual(expect.stringContaining('Manager'));
});
    
    
