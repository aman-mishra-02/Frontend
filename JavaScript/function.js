// no arguments

function sing(){
    console.log("DO")
    console.log("RE")
    console.log("ME")
    console.log("FA")
    console.log("SO")
    console.log("LA")
    console.log("TI")
}

// argumaent

function greet(name){
    console.log(`Hi, ${name}!`)
}

greet("Tom")

// Multiple Argument 

function Greet(firstName, lastName){
    console.log(`Hi, ${firstName} ${lastName[0]}.`)
}

Greet("Aman","Mishra")

function repeat(name,n) {
    for(let i=1;i<=n;i++){
        console.log(`${i} Hi, ${name}`)
    }    
}

repeat("Aman",3)

// return

 function add(a,b) {
     console.log(a+b);
    return a+b;     
 }
