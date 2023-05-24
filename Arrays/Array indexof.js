//returns the first index of the first element in the Array object or string.
let language="JavaScript is not Java"
var firstIndex=language.indexOf("is");
console.log("The index is "+firstIndex)

let languages=["C++", "JavaScript", "Java","Python"]
var firstIndex1=languages.indexOf("JavaScript")
console.log("The index is "+firstIndex1)

//this method returns -1 if an element is not present.
let languagess=["C++", "JavaScript", "Java","Python"]
var firstIndex2=languagess.indexOf("JavaScriptss")
console.log("The element is not found hence "+firstIndex2) 