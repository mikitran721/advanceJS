// HOC: stand for HIGHER ODER FUNCTIONS
const companies = [
  { name: "Cong ty 1", category: "Food", start: 1981, end: 2003 },
  { name: "Cong ty 2", category: "Telecommunication", start: 1981, end: 2003 },
  { name: "Cong ty 3", category: "Food", start: 2002, end: 2010 },
  { name: "Cong ty 4", category: "Real estate", start: 1981, end: 2010 },
  { name: "Cong ty 5", category: "Telecommunication", start: 1981, end: 1999 },
  { name: "Cong ty 6", category: "Food", start: 1975, end: 2003 },
  { name: "Cong ty 7", category: "Telecommunication", start: 1981, end: 2003 },
  { name: "Cong ty 8", category: "Food", start: 1999, end: 2003 },
  { name: "Cong ty 9", category: "Tecnology", start: 1981, end: 2022 },
];

const ages = [45, 62, 14, 16, 46, 26, 65, 33, 34, 13, 21, 17, 6, 55, 22];

// foreach: tham so vao la ham -callback
// companies.forEach(function (company, index, companies) {
//   console.log(index, ` `, company);
// });

// companies.forEach((company) => console.log(company));

// filter - tham so la function; tra ra mot array moi
// const diBar1 = ages.filter(function (age) {
//   if (age >= 18) return true;
// });

// const diBar2 = ages.filter((age) => age >= 18);
// console.log(diBar2);

// const foodComp = companies.filter((company) => company.category === "Food");
// console.log(foodComp);

// const companiesTwentiethCentery = companies.filter(
//   (company) => company.start >= 1901 && company.end <= 2000
// );
// console.log(companiesTwentiethCentery);

/** MAP
 * nhan vao function: tham so dau tien la thanh to moi
 */
// const companyNames = companies.map((company) => company.name);
// console.log(companyNames);

// const companyInfo = companies.map(
//   (company) => `${company.name} (${company.start} - ${company.end})`
// );

// console.log(companyInfo);

// const agesSquared = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
// console.log(agesSquared);

// sort -tang dan; lam ntn se sx luon ca array ban dau (can luu y)
// const companiesSorted = companies.sort(function (comA, comB) {
//   if (comA.start > comB.start) return 1;
//   else return -1;
// });
// console.log(companiesSorted);

// const companiesSorted2 = companies.sort(
//   (comA, comB) => comA.start - comB.start
// );

//sx giam dan
// const companiesSorted2 = companies.sort(function (comA, comB) {
//   if (comA.start > comB.start) return -1;
//   else return 1;
// });
// const companiesSorted2 = companies.sort(
//   (comA, comB) => comB.start - comA.start
// );
// console.log(companiesSorted2);
/**
 * dau >: sx tang dan; dau <: sx giam dan
 */
// const companiesSorted = companies.sort((comA, comB) =>
//   comA.name.toLowerCase() < comB.name.toLowerCase() ? 1 : -1
// );
// console.log(companiesSorted);

// reduce; TOTAL la gia tri tinh tong, can gia tri khoi tao = 0;
// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

//tong thoi gianton tai cac cong ty
// const years = companies.reduce(
//   (total, company) => total + (company.end - company.start),
//   0
// );

// console.log(years);

//ket hop
const combined = ages
  .map((age) => age * 2)
  .filter((age) => age > 50)
  .sort((ageA, ageB) => ageA - ageB)
  .reduce((total, age) => total + age, 0);

console.log(combined);
