// TODO: test that intern constructor creates the object and returns the right data

const Intern = require("../lib/Intern");

test("Receives Intern input strings from user", () => {
  const testIntern = new Intern(
    "Brianna",
    "12345",
    "brianna@mail.com",
    "College of Western Idaho"
  );

  expect(testIntern.name).toEqual("Brianna");
  expect(testIntern.id).toEqual("12345");
  expect(testIntern.email).toEqual("brianna@mail.com");
  expect(testIntern.school).toEqual("College of Western Idaho");
});

test("Gets school from Intern class", () => {
  const testIntern = new Intern(
    "James",
    "45322",
    "james@mail.com",
    "Oregon State University"
  );

  expect(testIntern.getSchool()).toEqual("Oregon State University");
});

test("Gets role from Intern contructor", () => {
  const testIntern = new Intern(
    "James",
    "45322",
    "james@mail.com",
    "Oregon State University"
  );

  expect(testIntern.getRole()).toBe("Intern");
});
