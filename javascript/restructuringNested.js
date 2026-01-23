const Person = {
    id: 2,
    name: "Munna",
    age: 22,
    contact: {
        email: "mdmunna19434@gmail.com"
    }
}

const {contact:{email}} = Person;

console.log(email)

