//   reduce array method 

const arr = [12,13,4,34,45,3.3]
const Min = arr.reduce((min,curr) => {
    if(min<=curr){
        return min
    }
    else{
        return curr
    }
})

console.log(Min)


const Sum = arr.reduce((sum,curr) => sum+curr)

console.log(Sum)

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

const highestRated = movies.reduce((high,curr) => {
    if(high.score>=curr.score){
        return high
    }
    else{
        return curr
    }
})

console.log(highestRated.title.toUpperCase())