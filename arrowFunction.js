/*
function getFull(name, age) {
  return `name: ${name}, age: ${age}`;
}

// call
let data = getFull(function () {
  return "Miki";
}, 100);

console.log(`>>> check data: `, data);
*/

/*
var getName = () => {
  return "Miki Tran1";
};
console.log(`>> name1: `, getName());

var getName2 = () => "Miki Tran 2";
console.log(`>> name2: `, getName2());
*/
/*
let getName = (name) => alert(name);
getName("Miki 1");

let getName2 = (name) => alert(name);
getName2("Miki 2");
*/
/**
var listData = ["Vũ Thanh Tài", "Nam Định", 22, "Độc Thân"];
listData.map((value) =>
  console.log(isNaN(value) === false ? value + 1 : value.toUpperCase())
);
console.log(listData);

let listNums = [2, 4, 5, 11, 45, 60];
let match = [];
listNums.forEach((value) => {
  if (value % 2 == 0) {
    match.push(value);
  }
});
console.log(`>> check so chan: `, match);
*/
//dung ham trong ham - cua obj
var obj = {
  name: "Miki Tran",
  age: 22,
  getName: function (param) {
    console.log(param());
  },
  getAge: function (param) {
    console.log(param());
  },
  showAll: function () {
    //getName
    this.getName(() => {
      return "name 1: " + this.name;
    });
    //getAge
    this.getAge(() => {
      return "age 1: " + this.age;
    });
  },
};
obj.showAll();
