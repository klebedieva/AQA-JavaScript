const users = [
    {
        firstName: "Din",
        lastName: "Winchester",
        email: "din.winchester10@gmail.com",
        age: 32
    },
    {
        firstName: "Sam",
        lastName: "Winchester",
        email: "sam.winchester10@yahoo.com",
        age: 34
    },
    {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe0210@urk.net",
        age: 55
    },
    {
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice.johnson0210@gmail.com",
        age: 25
    }
];

for (const {firstName, lastName, email, age} of users) {
    console.log(`Name: ${firstName} ${lastName}, Email: ${email}, Age: ${age}`);
};
