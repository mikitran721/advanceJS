let yearJohn = 0;
// debugger;

function tinhTuoi(year) {
  return 2023 - year;
}

//thu tuc
function thayDoiNamSinh() {
  yearJohn = 1985;
}

thayDoiNamSinh();

let age = tinhTuoi(yearJohn);
console.log(`>>> tuoi cua John: `, age);

const tinhTuoi2 = function (year) {
  return 2023 - year;
};

// thu tuc
const thayDoiNamSinh2 = function () {
  yearJohn = 1992;
};

let arr2 = ["miki", "poo", 2023, true, 2023, "phoong"];

console.log(`>>> check arr.indexOf(2023) `, arr2.indexOf(2023));

/**
 Luu chu nhieu dong

 */
console.log("object :>> ", object);
console.log(object);
