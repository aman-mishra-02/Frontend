//                                     forEach
// Ex 1
const arrs = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5]

function print(element){
    console.log(element)
}

arrs.forEach(print)

// Ex 2
const movies= [
    {
        title: "Shawshank Redemtion",
        score: 95
    },
    {
        title: "Godfather",
        score: 99
    },
    {
        title: "The Dark Knight",
        score: 92
    },
    {
        title: "Your Name (Kimi no Nawa)",
        score: 95
    },
    {
        title: "Pulp Fiction",
        score: 95
    },
]

movies.forEach(function(movie){
    console.log(`${movie.title} - ${movie.score}/100`)
})

//                                     Map

const Doub= arrs.map(function(ele){
    return ele*2
})

for(f of Doub){
    console.log(f)
}

const FavMov= movies.map(function(movie){
    return movie.title.toUpperCase();
})

for(f of FavMov){
    console.log(f)
}

//                            Arrow Function

// ex 1

const add=(x,y) =>{
    return x+y;
}

console.log(add(2,4))

// ex 2

const isEven = function (num) {   //regular
    return num%2===0;
}

const iseven = (num) => {         //arrow with return
    return num%2===0;
}

const iSeven = (num) => (         //arrow implicit return
    num%2===0
)

const IsEven = (num) => num%2===0 //implicit return no parans

console.log(IsEven(4))

//ex 3

const favMov = movies.map((movie) => movie.title)

for (f of favMov){
    console.log(f)
}

//                              filter( , )

// ex 1

const odd = arrs.filter((n) => n%2===1)

for (f of odd){
    console.log(f)
}


//  ex 2

const high = movies.filter((m)=>m.score>=95)

//                           some & every

const t=arrs.every(t=> t<=5)
console.log(t)