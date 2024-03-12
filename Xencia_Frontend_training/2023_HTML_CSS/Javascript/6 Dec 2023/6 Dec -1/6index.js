var age = parseInt(prompt("Enter Your Age"));

function years(age) {
    var year = 90-age;
    return year;
}

function months(age) {
    var year = 90-age;
    return year*12;
}

function weeks(age) {
    var year = 90-age;
    return year*52;
}

alert("You have "+ years(age)+" years ,"+ weeks(age)+" Weeks and "+months(age)+" months left.");