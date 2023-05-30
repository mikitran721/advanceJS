class Student {
  constructor(code, name, age) {
    this.code = code;
    this.name = name;
    this.age = age;
  }

  showInfo() {
    return `code: ${this.code} ,name: ${this.name}, age: ${this.age}`;
  }

  getAge() {
    let today = new Date();
    return today.getFullYear() - this.age;
  }
}

let studentObj = new Student("sv002", "miki", 1900);
console.log(studentObj.showInfo(), " tuoi: ", studentObj.getAge());
