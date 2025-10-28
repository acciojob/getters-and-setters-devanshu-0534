class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // getter for name
  get name() {
    return this._name;
  }

  // setter for name
  set name(name) {
    this._name = name;
  }

  // getter for age
  get age() {
    return this._age;
  }

  // setter for age
  set age(age) {
    this._age = age;
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name, age);
  }

  study() {
    console.log(this.name + " is studying");
  }
}

class Teacher extends Person {
  constructor(name, age) {
    super(name, age);
  }

  teach() {
    console.log(this.name + " is teaching");
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

