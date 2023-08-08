//abstraction means we should hide the details and show the essentials.
function Circle(radius){
    this.radius = radius;
    //private variables.
    let defaultLocation ={x:0,y:0};
    this.getDefaultLocation = function(){
        return defaultLocation;
    }
    this.draw = function(){
        console.log("Drawing Circle...");
    }

    //use this property to define getter/setter functions.
    Object.defineProperty(this, 'defaultLocation',{
        //getter is a function used to read a property.
        get: function(){
            return defaultLocation;
        },
        set: function(value){
            //used to set logic
            if(!value.x || !value.y){
                console.log("Invalid location.")
            }
            defaultLocation = value;
        }
    })
}

const circle = new Circle(10);
circle.draw();
circle.defaultLocation = 1;
const location = circle.defaultLocation;
console.log(location);

