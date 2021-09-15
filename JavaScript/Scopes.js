//        function scope

// function corn() {
//     let corn ="yellow and Green"
//     console.log(corn)
// }

// console.log(corn) //  corn variable is not accessible outside function (function scope)
// corn()



// let fruit = "pineapple"
// function Fruit(){
//     let fruit = "Apple"
//     console.log(fruit)
// }
// console.log(fruit)
// Fruit()


//       block scope   inside conditionals or loops

//       lexical scope  ( nested has access to parents elements )

// function Danger() {
//     let heroes = ["Spiderman","Iron Man","Thor","Solmon Bhoi"]
//     function cryForHelp(){
//         for(let hero of heroes){
//             console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
//         }
//     }  
//     cryForHelp()  
// }

// Danger()

//Higher order function


function range(min,max){
    return function (num) {
        return num>=min && num<=max   
    }
}

let isChild = range(0,17)
let isAdult = range(18,55)

console.log(isChild(15))
console.log(isChild(25))
console.log(isAdult(65))
console.log(isAdult(45))
