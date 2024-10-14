/*
if(true){
    console.log("This is True");
} else if(false){
    console.log("This is False");
} else{
    console.log("This is False");
}

if(1 ==true)*/

const num = 0;
// if the number is setted in = above, it is gonna be true.
//This is because, in if block, there should be number if you wanna get true as result.
const bool = Boolean(num);
console.log(bool);

if(num){
    console.log("this is true");
} else{
    console.log("this is false");
}

//so, for example, if const num = null or undefined, then the result will be false.
// It is because, condition in the if should be number.
// Undefined or null are not even number so you will get false.
//As specific an example, when you put 0 into const num = also will be false.
//This is the only special one. Remember this.