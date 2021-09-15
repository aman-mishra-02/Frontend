console.log("Hello World");

//if else

let random =Math.random();

if(random<0.5){
    console.log(" Head ")
}

else{
    console.log( " Tail ")
}


// Nested if else cond

let password = prompt("Enter Password")

if(password.length >= 6){
    if(password.indexOf(' ')===-1){
        console.log(" Valid Password ")
    }
    else{
        console.log(" Password Must Not Contain Spaces ")
    }
}

else{
    console.log(" Password Too Short ")
}

//switch case statement

let day=prompt(" Enter A Number ");

switch (day) {
    case '1':
        console.log(" MONDAY ")
        break;
    case '2':
        console.log(" TUESDAY ")
        break;
     case '3':
        console.log(" WEDNESDAY ")
        break;
    case '4':
        console.log(" THURSDAY ")
        break;
    case '5':
        console.log(" FRIDAY ")
        break;
    case '6':
        console.log(" SATURDAY ")
        break;
    case '7':
        console.log(" SUNDAY ")
        break;
    default:
        console.log(" I DON'T KNOW THAT ")
        break;
}