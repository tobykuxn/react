class Human {
  gender = "Female";

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "Toby";
  gender = "Male";

  printMyName = () => {
    console.log(this.name);
  };
}

const person = new Person();

person.printMyName();
person.printGender();
