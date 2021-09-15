const body = document.querySelector("body");
const h1 = document.querySelector("h1");

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let r = Math.floor((Math.random()*255));
    let g = Math.floor((Math.random()*255));
    let b = Math.floor((Math.random()*255));

    h1.innerText=`rgb(${r},${g},${b})`;
    if(r+g+b<255){
        h1.style.color = "White";
    }
    else{
        h1.style.color = "Black";
    }
    body.style.backgroundColor = `rgb(${r},${g},${b})`;
})