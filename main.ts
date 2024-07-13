 // Type Narrowing
 
 let myName : string | number = "Asfa"
  console.log(typeof myName);
         

     // type of 
    function isValue(val: string | number) {
         if(typeof val === "string"){
           return val.toUpperCase()

         }
     else 
     {
       return val.toFixed(2)
     }        
    }
  let  val1 = isValue("asfa")
  console.log(val1);
  const val2 = isValue(22.67990737)
  console.log(val2);

    // type 
type Circle = {
    kind: "circle",
    radius: number,
}
type Square = {
    kind: "square",
    length: number,

}
type Rectangle = {
    kind: 'rectangle',
    length: number,
    width: number,
}
    type Shape =  Circle | Square | Rectangle
    function maths(Shape: Shape){
        switch(Shape.kind){
            case "circle":
                console.log("Circle");
                
                return  Math.PI* Shape.radius**2
                
                case "rectangle":
                    console.log("Rectangle");
                    
                    return Shape.length * Shape.width
                    case "square":
                        console.log("Square");
                        
                        return Shape.length * Shape.length
        }
    }
    const myCircle :Circle = {
        kind: "circle",
        radius: 2
    }
const myAns = maths(myCircle)
console.log(myAns);

const mySquare : Square= {
    kind: 'square',
    length: 6
}
const myAns1 = maths(mySquare)
console.log(myAns1);

const myRectangle : Rectangle = {
    kind: "rectangle",
    length : 5,
    width: 6
}

const myAns2 = maths(myRectangle)
console.log(myAns2);