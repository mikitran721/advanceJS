/**<<<<<properties value shorthand>>>> */

/* const getCourse = (name, price, free) => {
  return {
    name,
    price,
    free,
  };
};

console.log(getCourse("ES6", 20, false));
*/

/**Method properties */
/*
const getCourse = (name, price, free) => {
  return {
    name,
    price,
    free,
    showInfo: () => {
      console.log(`${name} + ${price} + ${free}`);
    },
    showInfo2(delimiter = "-") {
      console.log(`${name + delimiter + price + delimiter + free}`);
    },
    // ko sd duoc arrow function o day
  };
};

let myCourse = getCourse("ES6", 20, false);
myCourse.showInfo();
myCourse.showInfo2("+++");
myCourse.showInfo2(); //ko truyen params thi value mac dinh dc sd
console.log(myCourse);
*/

/** computed property names */
let propPrefix = "support_";
let bootstrapSupport = {
  [propPrefix + "chrome"]: true,
  [propPrefix + "ie"]: true,
  [propPrefix + "chrome"]: false,
};
console.log(bootstrapSupport);
