//Activity #1 (Varaible declaration)
//Task 1
var num=9;
console.log(`value is ${num}`);
//Task 2
let num_2=10;
console.log(`value is ${num_2}`);
// Activity #2 (const declaration)!
//Task 3    
const num_3='true';
console.log(`bool value is ${num_3}`);
//Activity #3 (Data Types)!
//Task 4
let ticket_amount=233;
var emp_user_name="Humayun";
let value="false";
const obj={
    user_name:"Usama",
    emp_type:"Manager",

}
const collection=new Array(1,2,3,4);
console.log(ticket_amount);
console.log(emp_user_name);
console.log(value);
console.log(obj);
console.log(collection);
//Activity #4 :Reassigning Varaibles!
//Task 5:
let val=87;
console.log(`value before re assigning is :  ${val}`);
val=99;
console.log(`value after re assigning is : ${val}`);
//Activity 5 Understanding const!
//Task#6:
try
{
const Value=87;
console.log(`Value is :${Value}`);
throw new Error('Intentional Error');
} 

 catch (e) 
{
    Value=99;
    console.error(`An error occurred: ${e.message}`);
 
}
//Feature request!
console.log('Feature Request!');
let  user_name_emp='Elizay!';
let  marks=new Array(100,99,23);
console.log(`value is :${user_name_emp}`);
console.log(`Type of variable is:${typeof(user_name_emp)} `);
console.log(`value is :${marks}`);
console.log(`Type of variable is:${typeof(marks)} `);

//part#2
let user_name='Akash';
console.log(`User user_name  is :${user_name}`);

user_name='Ilmaz';
console.log(`After Reassiging user_name is :${user_user_name}`);
 
const user='Employee';
console.log(`Value is :${user}`);
//throw new Error('Intentional Error');

user='Manager';
console.error(`An error occurred: ${e.message}`);
 


