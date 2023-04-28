
var number=9;
 for(i=1; i<=number; i++){
  console.log( i,"I love Javascript.");
 }


 let sum=0;
 var n=100;
  for(i=1; i<=n; i++){
   sum=sum+i;  
  }
  console.log( "The sum is"+sum );

  //reverse method for the loop.
  let summ=0;
 var n=100;
  for(i=n; i>=1; i--){
   summ=summ+i;  
  }
  console.log( "The sum is"+summ );

  //learning functions.
function greet(){
    console.log("Hello world!");
}
greet();

function addition(num1, num2){
    console.log(num1+num2);
}
addition(45,34);
addition(29,39);

function subtraction(num1, num2){
    console.log(num1-num2);
}
subtraction(45,34);
subtraction(29,39);

function multiplication(num1, num2){
    console.log(num1*num2);
}
multiplication(45,34);
multiplication(29,39);

function division(num1, num2){
    console.log(num1/num2);
}
division(45,34);
division(29,39);

function upperCase(Name){
   console.log(Name);
}
upperCase("I LOVE LEARNING JAVASCRIPT");
upperCase("My name is Emmanuel");

//try to use a varible in a function(parameters).
let Name='Getange';
function variable(Name){
      console.log("My name is "+Name);
}
variable(Name);

//testing the use of return type in a function.
function add(a,b){
    return a+b;
}
let number1=12;
let number2=34;
let result=add(number1,number2);
console.log(result);
   
     let x =function (number){
        return(number*number);
         }
         console.log(x(4));
         console.log(x(3));

         //javascript variable scope.
         let a='hello';// this is a global variable. can be accesed inside or outside a function.
         function hello(){
            console.log(a);
         }
         hello();

         //changing the global variable in a function.
         let b='world';
         function change(){
            b=3;
         }
         // before calling the global variable
         console.log(b);

         //after calling the global variable.
            change();
            console.log(b);// output:3;

         function invock(){
            k=13;
         }
         invock();
         console.log(k);// output:13;
           

         //LOCAL VARIABLES
         function local(){
            let a=10;
            console.log(a);
         }
         local();

                //using global and local variables together.
                var t='Hello';//global variable
                 function man(){
                    let k=' Emmanuel';//local variable.
                     console.log(t+k);
                 }
                 man();

                 

                 //HOISTING 
                 console.log(test);//output: undefined.
                 var test;

                 //varible hoisting.
                 f=30;
                  console.log(f);//output: 30.
                   var f;

                   //in javascript ,initializations are not hoisted.
                   console.log(s);
                    var s=500;//initialization.  hence undefined.
      
          p=40;
          console.log(p);
            var p;

            //function hoisting.
             function heist(){
               log=278;
                 console.log(log);//output: 278.
                  var log;
             }
              heist();
         
         /*variable using let is not hoisted.
         d=56;
          console.log(d);
            let d;*/


            //function hoisting.
             great();
               function great(){
                  console.log("Hello world");
               }

               // Recursion.
 //this refers to a function that is called by itself.


    function countDown(number){
      console.log(number);

      const newNumber=number-1;
       if (newNumber >0){
          countDown(newNumber);//recurse.
       }
  }
  countDown(6);
     
  /* 
    countDown(6) prints 6 and calls countDown(5)
    countDown(5) prints 5 and calls countDown(4)
    countDown(4) prints 4 and calls countDown(3)
    countDown(3) prints 3 and calls countDown(2)
    countDown(2) prints 2 and calls countDown(1)
    countDown(1) prints 1 and calls countDown(0)
       base condition is met.   
  */

       //example 2.  Using recursion to calculate factorization.
      
 function factorial(y){
    //condition is met for factorization to work.
    if (y ===0){
       return 1;
    }
    else{
       return y*factorial(y-1);
    }

 }
      
    const l=30;
    //calling factorial if the number is greater than 0.
     if(l>0){
       let result= factorial(l);
        console.log(result);
     }


     //FUNCTION METHOD
     // 1. function apply().
     let arr=[3,4,5,6,7,8,9];
       const Max=Math.max.apply(null, arr);
       console.log(Max);

         //minimum element in the array.
         const Min=Math.min.apply(null, arr);
          console.log(Min);


           //functon methods
   //method bind.
   var website={
      Name:"Javatpoint",
      getName: function() {
            return this.Name;
      }
   }

   var unboundGetName=website.getName;
   var boundGetName=website.getName.bind(website);
    console.log(boundGetName());

    //fucntion method call();
    function suuum(m,n){
      return m+n;
    }
    //calling sum.
    let results=suuum.call(this,120,3400);
     console.log(results);

     //example 2 in the method call.
     function product(p,q){
      return p*q;
     }
     let result1=product(6,9);
      console.log(result1);

     let result2=product.call(this,5,9);
       console.log(result2);

       //example 3
       const Human={
         FirstName:'Emmanuel',
         SecondName:'Getange',
         Age: 22,
       };
        function great(){
         const detail=`My name is ${ this.FirstName} ${ this.SecondName}. I am ${ this.Age}`;
          console.log(detail);
        }
      great.call(Human);

      //function length.
      function func1(a,b=10,c){      
      }
       console.log(func1.length);


       //javascript Objects.
          //Method 1: LITERAL.
       Employee={id:39808187,Name:"Emmanuel Getange",call:0756735004}
       console.log(Employee.id + " " + Employee.Name + " " + Employee.call);

         company={item:"MILK",Name:"Brooksiders", locations:'Kiambu', box:2483767987}
           console.log(company.item+ "  " +company.Name+ "  " +company.locations+ "  " +company.box);

         //Method 2: INSTANCE OF AN OBJECT.
         var emp= new Object();
            emp.id=38808187;
            emp.Name="Emmanuel Getange";
            emp.call=0756735004;
         console.log(emp.id + "  " + emp.Name + "  " + emp.call);

         let house11= new Object();
               house11.number=09;
               house11.Name="Takimu";
               house11.call=12345;
               house11.address=2334;
          console.log(house11.number+"  "+house11.Name+"  "+house11.call+"  "+house11.address);

          //METHOD 3.
            //creating a new object constructor.(use of this).
            function job(id, Name, salary){
               this.id=id;
               this.name=Name;
               this.salary=salary;
            }

            var e=new job(101,"Emmanuel Getange",500000);
                 console.log(e.id+" "+e.name+" "+e.salary);


               //repetition of method 3.
                function employee(id, Name, salary){
                  this.id=id;
                  this.name=Name;
                  this.salary=salary;
                }
             var em= new employee(102,"JoyElizabeth Muthoni", 468000);
                 console.log(em.id+"  "+em.name+"  "+em.salary);

               
                 //JAVASCRIPT OBJECT METHODS
                 //METHOD1: .assign() method.
                 const object1={
                  a:1,
                  b:2,
                  c:3,
                 };
                 const object3={
                  g:6,
                  h:7,
                  i:8,
                 };
               const object2=Object.assign({c:4,e:5},object1);
                 console.log(object2.c,object2.e);
               const object4=Object.assign({f:6},object3);
                 console.log(object4.f);


                 var object5={
                  f:10,
                  k:23,
                  l:45
                 };
                 const object6=Object.assign({f:10,k:34,a:9},object5);
                  console.log(object6.f,object6.k,object6.l);


         //function method 2.
          //METHOD 2:CREATE.
          let Student={  //create an object with properties.
            Name:'Emmanuel Getange',
            Age: 22,
            display(){ //displays the name property of the object when called.
               console.log("Student Name:" ,this.Name);
            },
            displayInfo(){
               console.log("Student Age:" ,this.Age);
            }
          };
         
          //create a new student object that inherits from the existing student.
          var std1=Object.create(Student);
          var std1Age=Object.create(Student);
            //set the Name property of the new student.
            std1.Name = 'JoyElizabeth Muthoni.';
            std1Age.Age=20;

            std1.display();
            std1Age.displayInfo();

            //OBJECT ARRAYS.
            //Method 1: LITERAL.
            let emplo=['Joy Muthoni','Emmanuel Getange','Sonoo','Vidjk']
             for(i=1; i<emplo.length; i++){
               console.log(i,emplo[i]);
             }

            //Method 2: INSTANCE OF AN OBJECT.(using new Keyword)
            const array1= new Array();
             array1[0]=23;
             array1[1]=45;
             array1[2]=67;
             array1[3]=89;
            for (i=0; i<array1.length; i++){
               console.log(array1[i]);
             }
  
             //METHOD 3:ARRAY CONSTRUCTOR.
             let ApartMent= new Array('Alwake','Sunrise','Angies');
               for(i=0; i<ApartMent.length; i++){
                  console.log(ApartMent[i]);
               }

      //OBJECT:MATH
       //Abs()  method.
       let abs=Math.abs(-4);
         console.log(abs);//Output =4

         //Math.abs() with Non-Numeric Strings
         value1=Math.abs("Javascript");
          console.log(value1);// Output = NaN

         //Math.abs() with Numeric Strings.
         value2=Math.abs("57");
          console.log(value2);// Output =57

          value =Math.abs(-57);
          console.log(value);// Output =57
         
         // abs() method returns 0.
      let   value3=Math.abs([]);
          console.log(value3);// Output =0,   alternatives --->Math.abs(0),Math.abs([])

           let accesed=[1,2,3,4,5]
            var Maxx=Math.max.apply(null,accesed);
            console.log(Maxx);

//OBJECT.DEFINEPROPERTY.METHOD.
   //EXAMPLE1.
   const obj={}
    //with data property descriptor.
    Object.defineProperty(obj,'property1',{
      value:788,
      Name: "Emmanuel Getange",
    });
    console.log(obj.property1);

    //ARRAYS
    //METHOD1:concatenate.
    var arr1=['Java','Javascript','Kotlin',];
     var arr2=['C++','Python','Android'];
     let arr3=['Fullstack Development'];
    let result4=arr1.concat(arr2,arr3);
    console.log(result4);
     console.log(arr1[2]);//accessing array at the 1 index.
     console.log(arr1[1]);//accessing array at the 0 index.

     let arr4=[2,3,4];
       arr.name='Emmanuel';
    console.log(arr['name']);

    //concatenating nested arrays.
    let randomList=[1,2,3,4];
    let randomNestedList=[
      [5,6],
      [7,8],
      [9,10],
    ];
    let result5=randomList.concat(randomNestedList);
     console.log(result5);

     //change the random list index 0  from 1 to 0.
     randomList[0]='JAVASCRIPT';
     console.log(randomList);

     //modifying the randomNestedList.
     randomNestedList[1].push(4);
     console.log(randomNestedList);

     //METHOD 2:COPYWITHIN.
     let word=['apple','ball','orange','cat','dog'];
       //copies element from index 0 to index 3.
       word.copyWithin(3,0,3);
       console.log(word);

       let numbers=[1,2,3,4,5];
         numbers.copyWithin(0,4);
         console.log(numbers);

       var letters=['a','b','c','d','e'];
        letters.copyWithin(2,1);
        console.log(letters);

      //copywithin using 3 parameters.
      const laptops=['hp','dell','acer','asus','sumsung']
       laptops.copyWithin(0,2,4);//first parameter-->target. second parameter-->start. third parameter-->end.
       console.log(laptops);

      //MATH METHOD 2: arc-cosine function(inverse of the cosine function).
      let value4=Math.acos(0.45);//value parameter should be an angle.
       console.log(value4);

       //argument greater than 1.
       const value5=Math.acos(1.3);
        console.log(value5);//output =NaN. angle must range from(-1 to 1).
        
        //Math.acos() with Non-Numeric Argument
        var string=Math.acos(value5);
         console.log(string);//output =NaN. the parameter must be numerical value.


//OBJECTS:METHOD 3: OBJECT.DEFINEPROPERTY()METHOD.
  let person={
   Name:'Emmanuel',
   Age:22,
  };

  Object.defineProperty(person,'Gender',{
   value:'Male',
   writable:true,
   enumerable:true,
   configurable:true,
  });

  //adding second property to the person object.
  Object.defineProperty(person,'Salary',{
   value:600000,
   writable:true,
   enumerable:true,
   configurable:true,
  });
  console.log(person);

  //METHOD4:OBJECT.DEFINEPROPERTIES()METHOD.
   const person1={};
    Object.defineProperties(person1,{
     Name:{
       value:'JoyElizabeth',
       writable:true,
       configurable:true,
       enumerable:true,
     },
     Salary:{
      value:480000,
      configurable:true,
      writable:true,
     },
     Role:{
      value:'Fullstack Developer',
      writable:true,
      enumerable:true,
      configurable:true,
     }
    });
    console.log(person1.Name);
    console.log(person1.Salary);
    console.log(person1.Role);

    //ARRAY METHOD 3:entries.
    let languages=['Java','Kotlin','Python','JavaScript']
      /* array iterator object that contains key-value pairs for each index in the array.*/
      let iterator=languages.entries();
        //output should be in a 2-dimensional array.It does not change the values of the array.
        for(let array of iterator){
          console.log(array);
        }

        //suing the NEXT method.
    var symbols=['@','#','$','%','^']
      let iterator1=symbols.entries();
      console.log(iterator1.next().value);
      console.log(iterator1.next().value);
      console.log(iterator1.next().value);
      console.log(iterator1.next().value);
      console.log(iterator1.next().value);


  //MATH METHOD3. asin( inverse of the sine).
  let number3=Math.asin(-1);//negative angles.
   console.log(number3);

   let number4=Math.asin(1);//positive angles.
    console.log(number4);
  //MATH METHOD4 . cbrt( cube root).
   const number5=Math.cbrt(27);
    console.log(number5);

    const number6=Math.cbrt(-100);//takes negative number.
    console.log(number6);

    //cbrt  with numeric string value.
    var number7=Math.cbrt('189');
     console.log(number7);

  //METHOD5.ceil(rounding off to the nearest interger).
   let number8=Math.ceil(3.4);
   console.log(number8);

    let number9=Math.ceil(-3.4);//takes negative number.
    console.log(number9);

    //takes a numeric string number.
    let number10=Math.ceil('23.4');
    console.log(number10);

    //OBJECT:METHOD5: object entries ().
    let obj1={
      Name:"Emmanuel",
      Role:"Fullstack Developer",
      Salary:"60,000"
    };
    var entries=Object.entries(obj1);
    console.log(entries);
     
     //entries() With Array-like Objects.
    let obj2={ 
    0:"A", 
    1:"B", 
    2:"C", 
    3:"D"
  };
    console.log(Object.entries(obj2));

       // entries() With Random Key Arrangment.
    let obj3={ 
     22:'P',
     13:'Q', 
     17:'R', 
     34:'T'
    }
     console.log(Object.entries(obj3));
     console.log(Object.entries(obj3)[2]);

      // entries() to Iterate Through Key-Value Pairs.
      let obj4={ 
        Name:'John',
        age:'27',
        location:'Nepal'
      };
         //iterate through the key-value pairs object.
         for(let [key, value] of Object.entries(obj4)){
          console.log(key, value);
         }
      
      //entries() With Strings
      let obj5='Emmanuel';
       console.log(Object.entries(obj5));

      //recap on arrays entries.
      let symbol=['#','@','$','&'];
      let trial1=symbol.entries();
      //loop through the array entries
      for(let trial of trial1){
        console.log(trial);
      }

      //array  every().
      function checkAdult(age){
        return age >=18;
      }

      let ageArray = [23,45,67,12,34];
      let check=ageArray.every(checkAdult);
      console.log(check);

      //array flattening
      let numberss=[1,2,[3,4,[5,6,[7,8,9,[10]]]]];
      var flattening = numberss.flat(2);
      console.log(flattening);

      //array flattening without default arguments
      let arrayArray=[1,2,3,[5,6,7]];
      let array5=arrayArray.flat();
      console.log(array5);

      //flat() to Remove Holes in Array
      let holes=[1,,3,,5]
      let Holes=holes.flat()
      console.log(Holes);

      //  OBJECT.FREEZE()
   var objectsss={
    prop: function(){},
    foo:'bar',
   }
   //freeze object
   Object.freeze(objectsss);
   //make some changes
   objectsss.foo = 'bar1';
   //changes will not occur
   console.log(objectsss.foo);

   //failing silently
   let obje={
    prop: function(){},
    foo:'barr',
   }
   //freeze the object before 
   let o=Object.freeze(obje);
   //changes will fail silently
   obje.fooo='barr1';  
   console.log(obje.fooo);

   //cannot add a new property.
   obje.new_fooo='bar..';
   console.log(obje.new_fooo);

   //ARRAY FLATMAP()
   let lengthy=[1,2,3,4,5];
   //each element in the array is squared and later flattened.
   let resultingArray=lengthy.flatMap(function(x){
      return [x**2]
   });

   console.log(resultingArray);

   let lengthy1=[1,2,4,5,6,7,8,9,10,11,12];

   //each element is increased by one and later flattened.
   let resultingArray2=lengthy1.flatMap((element)=> element+1);
   console.log(resultingArray2);

   //Example 2: Using flat() and map() Instead of flatMap()
   let lengthy2=[1,2,3,4,5,6,7];

   //incrementing each element on the array.
   let afterMapping=lengthy1.map((element)=>element+3);

   //flatten each element in the array.
   let afterFlatten=afterMapping.flat();
   console.log(afterFlatten);

   //EXAMPLE 2: DECODE IN YOUTUBE.
   const pairs = [[1,2],[5,7],[6,9],[9,10]];
   const resultPairs  =pairs.flatMap((pairs)=>pairs[0]+pairs[1]);
   console.log(resultPairs);

   //Object.getOwnPropertyDescriptor()
   let objj={num:10}
     //get the property description of the num property of objj.
     let numValue=Object.getOwnPropertyDescriptor(objj, 'num');
     console.log(numValue);


     let objj1={
      num:20
     }

     //the output will be undefined if the property does not exist in the object.
     let numvalue=Object.getOwnPropertyDescriptor(objj1, 'num1');
     console.log(numvalue);

     let objj2={
      x: 711,
      get number(){
        return this.x;
      },
     };
     //get the object.getOwnPropertyDescriptor from the number method.
     let  nymber=Object.getOwnPropertyDescriptor(objj2, "number");
     console.log(nymber);

     //get the object.getOwnPropertyDescriptor from x
     let nymber1=Object.getOwnPropertyDescriptor(objj2, 'x');
     console.log(nymber1);

     //the output will be undefined if the property does not exist in the object.
     let nymber2=Object.getOwnPropertyDescriptor(objj2, 'y');
     console.log(nymber2); 

     //OBJECT METHOD - VALUES -1.
     let objj3={65:'A',67:'B',70:'C',80:'D',}
     //print the enumerable values of the object
     console.log(Object.values(objj3));

     //METHOD -VALUES -2.
     //object array of string values
     let objj4=['Javascript', 'Python','Kotlin'];
     console.log(Object.values(objj4));

     //Example 3: values() With Object Having Random Key Ordering
     let objj5={42:'b',53:'c',24:'d',25:'e'}
     console.log(Object.values(objj5));//arranges from th largest to smallest.

     //Example 4: JavaScript Object.values() With String.
     const string1='code';
     console.log(Object.values(string1));//it returns an array of characters.

     //JavaScript Array fill()
     //example 1: 
     let prices=[23,34,56,78]
     let new_prices= prices.fill(10);
     console.log(new_prices)

     //JavaScript Array from.
     //creates a new array or an iterable object.
     let newArray=Array.from("ABC");
     console.log(newArray);

     //a function that returns a new array.
     function createArray(arraylike,mapfunc){
      return Array.from(arraylike,mapfunc);
     }

     //map the function.
     let mapfunc=createArray([2,3,4],(element)=>element+2)
     console.log(mapfunc);

     