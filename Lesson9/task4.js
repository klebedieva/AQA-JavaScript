const person = {
    firstName: "Brandon",
    lastName: "Clinton",
    age: 25
};

person.email = "brandon.clinton@test.com";
delete person.age;

console.log(person);

