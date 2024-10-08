const person = {
    name: ["code","mafia"],
    age: 32
    gender: 'male'
    interest: {
        sports: "football",
        music: "piano"
    },
    getFullName: function(){
        console.log(this.name[0] + this.name[1])
    }

};

const agekey = "age";
person[agekey] = 12;
//when you wanna use const, console and something like it, use 
//"A[B]=C;" If it is not just simply use A.B=C
console.log(person.age);
person.getFullName();