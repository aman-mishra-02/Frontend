const MyMath={
    PI:3.1416,
    SQUARE:function(num){
        return num*num;
    },
    CUBE(num){ //shorthand 
        return num**3; 
    }
}

let c3=MyMath.CUBE(3);
console.log(c3);

//      try Catch statement

try{
    hello.toUpperCase();
} 
catch{
    console.log("Error !!!");
}