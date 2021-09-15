//====================
// Default parameter
//====================

function rollDie(sides = 6) {
    return Math.floor(Math.random()*sides) + 1
}

console.log(rollDie())
console.log(rollDie(20))
console.log(rollDie())
console.log(rollDie(10))
console.log(rollDie())
console.log(rollDie(20))

//========
// Spread
//========

const nums = [1,34,5,22,45,67,54,32,12,90,87,72,33]

console.log(Math.max(nums))    // NaN
console.log(Math.max(...nums)) // 90 (...)->Spread array into different parameter for Math.max() meathod

//===========================
// Spread with array litrels 
//==========================

const greet = "HELLO"

const spell = [...greet]
console.log(spell)

//====================
// spread with Object
//====================

const obj={
    FirstName: "Aman",
    LastName: "Mishra",
    Age:19,
}

const Details= {...obj , gender: "male"}

console.log(Details)

// ================
// Rest Parameters
// ================

function sum(...nums) {
    return nums.reduce((sum , num) => sum + num)
}

console.log(sum(100 ,200,300,400))

// ===================
// ARRAY DESTRUCTURING
// ===================
const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

// const highScore = scores[0];
// const secondHighScore = scores[1];

const [gold, silver, bronze, ...everyoneElse] = scores;

// ===================
// OBJECT DESTRUCTURING
// ===================
const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors',
    city: 'San Francisco',
    state: 'California'
}

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;
const { email, firstName, lastName, city, bio } = user;

// const { born: birthYear, died: deathYear = 'N/A' } = user;

// const { city, state, died = 'N/A' } = user2;

// ===================
// PARAM DESTRUCTURING
// ===================

// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`
// }
// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`
// }


function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`
}


const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]


// movies.filter((movie) => movie.score >= 90)
// movies.filter(({ score }) => score >= 90)


// movies.map(movie => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// })

const mov = movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
})

console.table(mov)