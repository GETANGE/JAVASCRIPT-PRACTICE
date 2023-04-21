//Examine the document object.
 //shows all the properties of the document object.
console.log(document);
 console.log(document.URL);//used to check the URL of the document.
 console.log(document.title);//used to check the title of the document
 document.title ='Dom manupulation.';
 
 //getelement by id.
  console.log(document.getElementById('header-title'));
   let headerTitle=document.getElementById('header-title');
   console.log(headerTitle);
   //change the title of the header.
   headerTitle.innerHTML = 'Hello World';