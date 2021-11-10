const Employee = require('../lib/Employee.js');

// test to set properties

test('can instantiate an Employee object from constructor arg', () => {
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
    
    
    // const employee = new Employee(name, id, email);

    // expect(employee.name).toEqual(expect.any(String));
    // expect(employee.id).toEqual(expect.any(Number));
    //expect(employee.email)

//     const e = new Employee('bob', 1,'bob@bobo'); 

//     expect(e.name).toEqual(expect.any(String));
//     expect(e.name).toEqual('bob');
//     expect(e.name).not.toEqual(1);
    
//     expect(e.hello()).toEqual('hello');
//     expect(e).toBeInstanceOf(Employee); 

// });