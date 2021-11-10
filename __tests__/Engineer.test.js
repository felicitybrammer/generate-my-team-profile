const Engineer = require('../lib/Engineer.js');
//const Employee = require('../lib/Employee.js');


// test to set properties

test('can set github from constructor argument', () => {
    const e = new Engineer('Sam', 1, 'dog@mail.com', 'sam123');

    expect(e.github).toEqual('sam123');
});

// tests to get properties

test('can get github via getGithub()', () => {
    const e = new Engineer('Sam', 1, 'dog@mail.com', 'sam123');

    expect(e.getGithub()).toEqual(expect.stringContaining(e.github.toString()));
});


test('getRole() should return "Engineer" ', () => {
    const e = new Engineer('Sam', 1, 'dog@mail.com', 'sam123');

    expect(e.getRole()).toEqual(expect.stringContaining('Engineer'));
});
    
    
