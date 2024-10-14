/*
function hello(name ="Tom"){
    console.log("hello" + name);
}

hello("Code Mafia");
//Code Mafiaが名前になるのでhell + nameのnameに代入される


const hello = function hello(name ="Tom"){
    console.log("hello" + name);
}

hello("Code Mafia");

constがfunctionの前にあるのとないのでは機能的には変わらないが
constがある場合だとhello("Code Mafia")がなどの名前が後に来ないと認識されない
functionだけだとmain.js全体から探すので順番は関係ないがfunctionをいっぱい
打った時にややこしくなる。
*/





/*const hello = function hello(name ="Tom"){
    console.log("hello" + name);
}*/


/*
const hello = name => console.log("hello" + name);

=>で=から{ までカットできるまた、標準値でTomなどの名前がついていなければ名前も省略可

hello("Code Mafia");
*/

/*const hello = (name, age) => console.log("hello " + name + age);


hello("Code Mafia", 10);
hello("Code Mafia 2", 20);
*/

const hello = (name, age) => {
    console.log("hello " + name + age);
    console.log("hello " + name + age);
}
//=>の先のコードが1行であれば{}をカットできるが２行以上だとカットできない
hello("Code Mafia", 10);
hello("Code Mafia 2", 20);

const hell = (name, age) => 40;

const arry = [1,2,3,4,5,6];

arry.forEach(value => console.log(value));







