// If

let sunnyDay = true;
if (sunnyDay) {
    console.log(sunnyDay);
}
//else

let marks = 40
if (marks > 40) {
    console.log("congrats you`re pass");
}
else {
    console.log("sorry you`re failed");
}

let mark = 30
if (mark > 20 ){
    console.log("congrats you`re pass")
}
else{
    console.log("sorry you`re filed")
}

//else if

let temperature = 24;
if (temperature < 20) {
    console.log("its a pleasant day")
} else if (temperature > 24) {
    console.log("its a hot day!")
} else {
    console.log("its cool day")
}

let temperaturee = 15;
if ( temperaturee < 30){
    console.log("its a cool day")
} else if(temperaturee > 10) {
    console.log("its a hot day")
}

let temperatures = 29
if (temperatures < 24){
    console.log("this day a not good")
}else if (temperatures > 20){
    console.log("this day a not good")
}
//Switch
let week = "WEEK";

switch (week) {
    case "WEEK":
        console.log("monday");
        break;
    case "WEEK":
        console.log("sanday");
        break
    default:
        console.log("none of these")
        break;
}

