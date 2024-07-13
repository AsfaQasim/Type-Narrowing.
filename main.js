// Type Narrowing
var myName = "Asfa";
console.log(typeof myName);
// type of 
function isValue(val) {
    if (typeof val === "string") {
        return val.toUpperCase();
    }
    else {
        return val.toFixed(2);
    }
}
var val1 = isValue("asfa");
console.log(val1);
var val2 = isValue(22.67990737);
console.log(val2);
function maths(Shape) {
    switch (Shape.kind) {
        case "circle":
            console.log("Circle");
            return Math.PI * Math.pow(Shape.radius, 2);
        case "rectangle":
            console.log("Rectangle");
            return Shape.length * Shape.width;
        case "square":
            console.log("Square");
            return Shape.length * Shape.length;
    }
}
var myCircle = {
    kind: "circle",
    radius: 2
};
var myAns = maths(myCircle);
console.log(myAns);
var mySquare = {
    kind: 'square',
    length: 6
};
var myAns1 = maths(mySquare);
console.log(myAns1);
var myRectangle = {
    kind: "rectangle",
    length: 5,
    width: 6
};
var myAns2 = maths(myRectangle);
console.log(myAns2);
