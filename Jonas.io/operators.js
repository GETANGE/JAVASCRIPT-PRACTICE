//Assingment operators simplified....
//x=25.
let x= 10+15;
console.log(x);
// x=35
x +=10;
console.log(x);

//jonas coding challanges.
let MarkMass = 78;
let MarkHeight =1.69;
let JohnMass = 92;
let JohnHeight =1.95;

let MarkTotal = MarkMass/(MarkHeight*MarkHeight);
console.log(MarkTotal);
let JohnTotal = JohnMass/(JohnHeight*JohnHeight);
console.log(JohnTotal);
if(MarkTotal>JohnTotal) {
    console.log(true);
    console.log(`Mark's BMI(${MarkTotal}) is higher than John's BMI(${JohnTotal})`);
}else{
    console.log(false);
    console.log("John's BMI is higher than Mark's!");
}
