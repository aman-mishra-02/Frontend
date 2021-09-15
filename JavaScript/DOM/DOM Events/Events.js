const btn = document.querySelector('#v2');
btn.onclick = function(){
    console.log("you clicked me");
    console.log('Hope it worked');
}
 
let count = 0;
btn.onmouseenter = function(){
    count++
    if(count >50){
        alert("If You Want to Click Please Click")
    }
    else{
        console.log("ahhhhhhhhhh"); 
        console.log("ahhhhhhhhhhhhhhhhhhhhhhh");
    }
}

const btn3 = document.querySelector("#v3");
btn3.addEventListener("click",function () {
    alert("Clicked"); 
})