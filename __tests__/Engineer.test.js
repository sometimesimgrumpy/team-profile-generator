// TODO: test that engineer constructor creates the object and returns the right data

const Engineer = require("../lib/Engineer");

test("Receives Engineer input strings from user", () => {
  const testEngineer = new Engineer(
    "Brianna",
    "12345",
    "brianna@mail.com",
    "sometimesimgrumpy"
  );

  expect(testEngineer.name).toEqual("Brianna");
  expect(testEngineer.id).toEqual("12345");
  expect(testEngineer.email).toEqual("brianna@mail.com");
  expect(testEngineer.github).toEqual("sometimesimgrumpy");
});

test("Gets github from Engineer class", () => {
  const testEngineer = new Engineer(
    "James",
    "45322",
    "james@mail.com",
    "james123github"
  );

  expect(testEngineer.getGithub()).toEqual("james123github");
});

test("Gets role from Engineer contructor", () => {
  const testEngineer = new Engineer(
    "James",
    "45322",
    "james@mail.com",
    "james123github"
  );

  expect(testEngineer.getRole()).toBe("Engineer");
});
