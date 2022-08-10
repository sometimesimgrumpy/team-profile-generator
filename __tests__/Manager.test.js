// TODO: test that manager constructor creates the object and returns the right data

const Manager = require("../lib/Manager");

test("Receives Manager input strings from user", () => {
  const testManager = new Manager(
    "Brianna",
    "12345",
    "brianna@mail.com",
    "Facilities",
    "601"
  );

  expect(testManager.name).toEqual("Brianna");
  expect(testManager.id).toEqual("12345");
  expect(testManager.email).toEqual("brianna@mail.com");
  expect(testManager.teamName).toEqual("Facilities");
  expect(testManager.officeNumber).toEqual("601");
});

test("Gets team name from Manager class", () => {
  const testManager = new Manager(
    "James",
    "45322",
    "james@mail.com",
    "Robotics",
    "503"
  );

  expect(testManager.getTeamName()).toEqual("Robotics");
});

test("Gets office number from Manager class", () => {
  const testManager = new Manager(
    "James",
    "45322",
    "james@mail.com",
    "Robotics",
    "503"
  );

  expect(testManager.getOfficeNumber()).toEqual("503");
});

test("Gets role from Manager contructor", () => {
  const testManager = new Manager(
    "James",
    "45322",
    "james@mail.com",
    "Robotics",
    "503"
  );

  expect(testManager.getRole()).toBe("Manager");
});
