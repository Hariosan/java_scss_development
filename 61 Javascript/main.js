const arry = [1,2,3,4,5];

for(let i = 0; i < 5; i = i + 1 ){
    console.log(i);
    //loop the number till 5.
    console.log(arry[i])
    //If you type in i you can get all numbers till 5.
}

for(let i = 0; i < arry.length; i = i++){
   //If you type in arry.length, you can get maximum nuber in the arry, so you no need to type in number each the number changes.
   // i++ means same with i + 1. if is is i+++, it means i + 2.
    console.log(arry[i]);
}