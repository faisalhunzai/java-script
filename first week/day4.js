
let studentPercentage = 76;


if (percentage >= 90) {
    return 'A+';
}
else if (percentage >= 80) {
    return 'A';
}
else if (percentage >= 70) {
    return 'B';
}
else if (percentage >= 60) {
    return 'C';
}
else if (percentage >= 50) {
    return 'D';
}
else {
    return 'F';
}   


let studentGrade = Grade(studentPercentage);
console.log(`Student Percentage: ${studentPercentage}%`);
console.log(`Student Grade: ${studentGrade}`);
