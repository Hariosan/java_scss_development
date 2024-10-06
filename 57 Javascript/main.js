
function hello(name, age){
console.log("hello " + name + age);
return name + age;
}

hello("code mafia", 10);
const returnVal = hello("code mafia 2", 20);
console.log(returnVal);

//If you dont type "return", you can not get respond from console then it will be "undefined"
//Also returnVal is rolling like "hello". It describes "hello("code mafia 2", 20);"
