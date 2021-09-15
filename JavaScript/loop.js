//                                                          for loop;

/* for(let i=1;i<=10;i++){
    console.log(i);
}

let a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
for(let i=0;i<a.length;i++){
    console.log(i, a[i]);
} */

//                                                          While Loop;

/* let Password="Qwerty~!@#"
let guess=prompt("Enter password");

while (guess !== Password) {
    guess=prompt("Enter password");
}

console.log("Hurray!! You Made It");

console.log("Okay, Lets Play Guessing Game ");


let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
    } else {
        guess = prompt("Too low! Enter a new guess:");
    }
}

if (guess === 'q') {
    console.log("OK, YOU QUIT!")
} else {
    console.log("CONGRATS YOU WIN!")
    console.log(`You got it! It took you ${attempts} guesses`)
}

*/

//                                                                    for of loop;

let subreddits=["donkey","hen","cock","chicken","ass"]

for (sub of subreddits){
    console.log(`http://www.reddit.com/r/${sub}`);
}