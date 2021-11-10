const Employee = require('../lib/Engineer.js');

// test to set properties

test('can instantiate an Employe object from constructor arg', () => {
    const e = new Employee('Sam', 1, 'dog@mail.com');

    expect(e.name).toEqual('Sam');
    expect(e.id).toEqual(1);
    expect(e.email).toEqual('dog@mail.com');
});

// tests to get properties

test('can get the employee name via getName()', () => {
    const e = new Employee('Sam', 1, 'dog@mail.com');

    expect(e.getName()).toEqual(expect.stringContaining(e.name.toString()));
});

test('can get the employee id via getId()', () => {
    const e = new Employee('Sam', 1, 'dog@mail.com');

    expect(e.getId()).toEqual(expect.any(Number));

});

test('can get the employee email via getEmail()', () => {
    const e = new Employee('Sam', 1, 'dog@mail.com');

    expect(e.getEmail()).toEqual(expect.stringContaining(e.email.toString()));
});

test('can get the employee role via getRole()', () => {
    const e = new Employee('Sam', 1, 'dog@mail.com');

    expect(e.getRole()).toEqual(expect.stringContaining('Employee'));
});
    
    
