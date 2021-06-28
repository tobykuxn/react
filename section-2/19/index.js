const number = 1;
const num2 = number;

console.log(num2);

const person = {
  name: "Toby",
};

const secondPerson = { ...person };

person.name = "Change";

console.log(secondPerson);
