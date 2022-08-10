// TODO: test that employee constructor creates the object

// test framework
// test('what should test check for', () => {
//    expect(function(test).tobe(testExpectation))
//})

const Employee = require("../lib/Employee");

test("Receive employee strings", () => {
  const testEmployee = new Employee("Brianna", "12345", "brianna@mail.com");

  expect(testEmployee.name).toBe("Brianna");
  expect(testEmployee.id).toBe("12345");
  expect(testEmployee.email).toBe("brianna@mail.com");
});

test("Gets name from Employee contructor", () => {
  const testEmployee = new Employee("James", "45322", "james@mail.com");
  //const getName = getName(testEmployee);

  expect(getName(testEmployee)).toBeEqual("James");
});

test("Gets id from Employee contructor", () => {
  const testEmployee = new Employee("James", "45322", "james@mail.com");
  const getId = getId(testEmployee);

  expect(getId).toBe("43522");
});

test("Gets email from Employee contructor", () => {
  const testEmployee = new Employee("James", "45322", "james@mail.com");
  const getEmail = getEmail(testEmployee);

  expect(getEmail).toBe("james@mail.com");
});

test("Gets role from Employee contructor", () => {
  const testEmployee = new Employee("James", "45322", "james@mail.com");
  const getRole = getRole(testEmployee);

  expect(getRole).toBe("Employee");
});
