// TODO: test that employee constructor creates the object

// test framework
// test('what should test check for', () => {
//    expect(function(test)).tobe(testExpectation)
//})

const Employee = require("../lib/Employee");

test("Receive employee input strings from user", () => {
  const testEmployee = new Employee("Brianna", "12345", "brianna@mail.com");

  // https://jestjs.io/docs/expect
  expect(testEmployee.name).toEqual("Brianna");
  expect(testEmployee.id).toEqual("12345");
  expect(testEmployee.email).toEqual("brianna@mail.com");
});

test("Gets name from Employee class", () => {
  const testEmployee = new Employee("James", "45322", "james@mail.com");

  expect(testEmployee.getName()).toEqual("James");
});

test("Gets id from Employee class", () => {
  const testEmployee = new Employee("James", "45322", "james@mail.com");

  expect(testEmployee.getID()).toBe("45322");
});

test("Gets email from Employee class", () => {
  const testEmployee = new Employee("James", "45322", "james@mail.com");

  expect(testEmployee.getEmail()).toBe("james@mail.com");
});

test("Gets role from Employee contructor", () => {
  const testEmployee = new Employee("James", "45322", "james@mail.com");

  expect(testEmployee.getRole()).toBe("Employee");
});
