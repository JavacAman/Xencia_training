var weight= parseFloat(prompt("Enter Weight"));
var Height= parseFloat(prompt("Enter Height"));


function bmi(w,h){
    var ans= w/(h*h);
    return ans;
}

alert("Your BMI is "+ bmi(weight,Height));