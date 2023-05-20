//this method checks whether the array contain spacified element.
let language = ["Javascript","Java","Golang","Python"]
//lets check whether the element exists in the array.
let check=language.includes("Golang");
console.log(check);//return true.

let check2=language.includes("Ruby");
console.log(check2);//returns false.

//include method for case sensitivite.
let check3=language.includes("python");
console.log(check3);// returns false.

//include using 2 parameters.
let check4=language.includes("Python",3 );
console.log(check4);