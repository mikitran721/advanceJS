class Person {
  constructor(code, name, age) {
    this.code = code;
    this.name = name;
    this.age = age;
  }

  showInfo() {
    console.log(`code: ${this.code} ,name: ${this.name}, age: ${this.age}`);
  }

  getAge() {
    let today = new Date();
    return today.getFullYear() - this.age;
  }
}

class Student extends Person {
  constructor(code, name, age, score) {
    super(code, name, age); //ke thua tu parents
    this.score = score;
  }

  showInfo() {
    super.showInfo();
    console.log(" & course: ", this.score);
  }
}

let studenObj = new Student("sv002", "miki", 1900, 9.5);
console.log(studenObj, ` info: `);
studenObj.showInfo();
