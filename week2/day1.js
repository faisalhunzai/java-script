/*let person = ["faisal", "Noman", "ali", "saran",];
let multiplepro =["ali", 39, true, {name: "ali"}];
let emptyArr = [];

console.log(person [0]);

console.log([person.length]);
console.log(person.push("mahnoor"));
console.log(person);

console.log();

let num1 =[1, 2, 3, 4,]
let num2 =[5, 6, 7, 8,]

console.log(num1.concat(num2));*/

let persons = ["faisal", "mahnoor", 33, "saran", "nazeem", 22, "khan"]
let Allname = ["noman", 35, false, {name: "ali"}]
console.log(persons[1]);

//Arry
let num3 = ["fasial", 2, 3, "mahnoor",]
let num4 =[5, 6, 7, 8,]
console.log(num3 .concat(num4));

//push
let push =["kainat", "sara"]
console.log(push .push("aliyan"));
console.log(push);

//pop
let name1 = ["mahnoor", "kainat", "fasial",]
let name2 =["aliyan", "alysher",]

console.log(name1.pop());
console.log(name1);

//shift
let name3 =["ali", "saran", "fasial",]
console.log(name3.shift());
console.log(name3);

//indexOf
let stdnames = ["faisal", "mahnoor", "saran", "sara"]
let indexofExample = stdnames.indexOf("saeed")
console.log(indexofExample, "index of");

//unshift
let unshiftexmaples =["faisal", "aliyan", "masood", "alam"]
let unshiftexmaple = unshiftexmaples.unshift("alina", "sara", "mukan", "aliyan")
console.log(unshiftexmaples);
console.log(unshiftexmaples, ("add a naw"));

//slice
//let sliceExamples = ["faisal", "mahnoor", "saran", "sara"]
let sliceExample =stdnames.slice(1,4) ;
console.log(sliceExample, "example");

// splice
let spliceExample = stdnames.splice(1, 5, "fasial", "aliyan")
console.log(spliceExample, "slice exmaple");
console.log(stdnames);

// find
let alphabet = ["a","b", "c", "d", "e", "f", "g", "h",]
let findexample = alphabet.find (item =>item ==='a',)
console.log(findexample, "find exmple" );

// filter
let filterexmaple = alphabet.filter(item => item ==="g",)
console.log(filterexmaple);





