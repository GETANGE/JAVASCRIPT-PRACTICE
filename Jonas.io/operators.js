//Assingment operators simplified....
//x=25.
let x= 10+15;
console.log(x);
// x=35
x +=10;
console.log(x);

//jonas coding challenges.
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


//type conversion 
let year=new Date();
console.log(year);
console.log(Number(year));
console.log(String(year));

//type coersion.
let n = '1'+ 1;
n = n-1;
console.log(n);

//truthy and falsey values.
// they include [ truthy ={},'name'] and [ falsy value=" ",undefined,null,NaN,0;]
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

//example.
//the second consdition is executed.
let money = 0;
if(money){
    console.log("Dont sleep at all");
}else{
    console.log("Get rour ass to work for money");
}