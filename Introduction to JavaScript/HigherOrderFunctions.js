let sum = function (a, b) {
   let result = 0
   for (let i = a; i <= b; i++) {
      result += i;
   }
   return result;
}

let sum2 = (a,b) => {
   let result = 0
   for (let i = a; i <= b; i++) {
      result += i;
   }
   return result;
}

// console.log(sum(1, 10));
// console.log(sum2(1, 10));


function mystery(x) {
   return 42;
}

function mystery2(callback) {
   let result = callback() + 5;
   console.log(result);
}

mystery2(mystery);


const companies = [
   { name: "Company One", category: "Finance", start: 1981, end: 2004 },
   { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
   { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
   { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
   { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
   { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
   { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
   { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
   { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach
companies.forEach((val) => {console.log(val.name)});        // no () required if 1 arg
companies.forEach((val, i) => {console.log(`${i}:${val.name}`)});

// filter

// Get 21 and older
const oldPeople = ages.filter((age) => age >= 21);
console.log(oldPeople);

// Filter retail companies
const retailCompanies = companies.filter((company) => company.category === "Retail");
console.log(retailCompanies);

// Get 80s companies
const year = companies.filter((year) => year.start >= 1980 && year.start < 1990);
console.log(year);

// Get companies that lasted 10 years or more
const length = companies.filter((length) => length.end - length.start >= 10);
console.log(length);

// map

// Create array of company names
const companyNames = companies.map(company => company.name);
console.log(companyNames);

//Create array of ages squared
const square = ages.map(age => age * age);
console.log(square);
// sort

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1 )); 
console.log(sortedCompanies);

//Sort ages
const sortAges = ages.sort((a, b) => a > b ? 1 : -1);
console.log(sortAges);

//reduce
const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);

//Get total years for all companies
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears);

