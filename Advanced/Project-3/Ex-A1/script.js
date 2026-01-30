function Shape(widthVal=0, heightVal=0) {
    if(this.constructor === Shape) {throw new Error("Can not create instance from Shape!")}
    Object.defineProperties(this, {
        width: {
            value:widthVal,
            enumerable: false,
            writable: false
        },
        height: {
            value:heightVal,
            enumerable: false,
            writable: false
        }
    })
}

function Rectangle(widthVal=null, heightVal=null) {
    if(this.constructor === Rectangle) {Rectangle.countCreated += 1;}
    if(widthVal === null || heightVal === null) {throw new Error("Please Enter Proper Values!")}
    if(widthVal < 0 || heightVal < 0) {throw new Error("Invalid values!")}
    if(Rectangle.countCreated > 1) {throw new Error("You Can not create more than one Rectangle!")}
    Shape.call(this, widthVal, heightVal);
};

function Square(lenVal=null) {
    if(this.constructor === Square) {Square.countCreated += 1;}
    if(Square.countCreated > 1) {throw new Error("You can not create more than One Square!")}
    Rectangle.call(this, lenVal, lenVal);
}

// Assign methods without implementation to the abstract class..
Shape.prototype.getArea = function() {};
Shape.prototype.getPerimeter = function() {};
Shape.prototype.toString = function() {}
Shape.prototype.valueOf = function() {};

// Create a copy of Shape's prototype object that contains the methods..
Rectangle.countCreated = 0
Rectangle.prototype = Object.create(Shape.prototype);

// Change the constructor of the child function because it is affected by Shape prototype..
Rectangle.prototype.constructor = Rectangle;

// Implementeing Rectangle methods
Rectangle.prototype.getArea = function() {return this.width * this.height;}
Rectangle.prototype.getPerimeter = function() {return (2 *(this.height + this.width))}
Rectangle.prototype.valueOf = function() {return this.getArea();}
Rectangle.prototype.toString = function() {
    console.log("Height: " + this.height + ", " + "Width: " + this.width);
    console.log("Area: " + this.getArea());
    console.log("Perimeter: " + this.getPerimeter());
}

// Create a copy of Square's prototype object that contains the methods.. 
Square.countCreated = 0;
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
Square.prototype.getPerimeter = function() {return this.width * 4};


const sqr = new Square(10);
const rec1 = new Rectangle(10, 3);
// const rec2 = new Rectangle(10, 5);


