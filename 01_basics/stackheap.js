//STACK

/*This is only memory tht is used for primitive data types like int float ,double ,string ,char .only these types bcz thy posses small ,memory space .
stack always assign copy of variales to each other like in the below example
Thats why if any copy variable try to change its copy it changes nbut original vlue remain unchanged for reference view below example*/


let username ="Saira"
let user2=username
user2 = username
user2 = "aroosh"
console.log(user2);
console.log(username);


// Heap memory?
// this is used forobjects mps list large number of datatypes non primitive types in this whenever any varibale is padsed to another variable only refrernece is passed no copy if reference changes then full value of object  changes 

let user1 = {
    name : "saira",
    idcard : 12345678
    
}

 console.table(user1)
 let user4 = user1
 user4.name ="saira@g.com"
 console.log(user4.name);
 