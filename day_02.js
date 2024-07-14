//Activity #1
//Task#1
let num_1=98;
let num_2=99;
console.log(`addition of two numbers is :${num_1+num_2}`);
//Task#2
let value_1=99;
let value_2=45;
console.log(`subtraction of two values is :${value_1-value_2}`);
//Task#3
const num1=9;
const num2=8;
let result=num1*num2;
console.log(`multiplication result of two values is:${result}`);
//Task#4
const divider=72;
const dividend=3;
let Result=divider/dividend;
console.log(`Division result is :${Result}`);
//Task#5
const var_one=25;
const var_two=3;
let Calculation=var_one%var_two;
console.log(`Calculated value for reminder is :${Calculation}`);
//Activity#2
//Task#6
let ticket_price=900;
ticket_price+=3;
console.log(`Ticket Price is :${ticket_price}`);
//Task#7
let Emp_salary=80000;
Emp_salary-=30000;
console.log(`Emp -Salary after deduction is :${Emp_salary}`);
//Activity#3    Conparison operators!
//Task#8
let amount_one=9200;
let amount_two=2300;
if (amount_one>amount_two) {
    console.log(`Amount one is greater than Amount two !`);
} else {
    console.log(`Amount two is greater than Amount one !`);
}
//Task#9
let user_amount=1000;
let per_day_salary=1000;
if (user_amount>=per_day_salary) {
    console.log(`User Amount and per day salary is equal!`);

} else {
    console.log(`User Amount and per day salary is not equal !`);
}
//Task#10
let emp_name='Akash';
let user_Name='Usman';
if (emp_name.length===user_Name.length)
 {
    console.log(`Both names are of  equal length !`);
} else {
    console.log(`Names are not equal length !`);
}
//Activity #4
//Task#11
let first_value=99;
if (first_value>50&&first_value<100)
{
    console.log(`Value is between 50 and 100 !`);
}
 else
{
    console.log(`value is greater than 50!`);
};
//Task #12
if (first_value>50 || first_value<100)
{
    console.log(`Value is greater 50 or less than 100 !`);
}
 else
{
    console.log(`value is greater than 50!`);
}
// Task#13
let accountant_name='Olive';
if (accountant_name.length!=4) {
    console.log(`characters of accountant name are  equal to 5 . `);
} else {
    console.log(`characters of accountant name are less than  5 . `);
};
//Activity#5
//Task14;
let number=8;
const interger_type =number>=0 ? "positive number :  " : "Negative number ";
console.log(interger_type,number);
//Feature Required !
//Arithmetic operators :
let Number1=9;
let Number2=5;
let value_req=Number1+Number2;
console.log(`Addition of ${Number1} and ${Number2} is : ${value_req}`);
value_req=Number1-Number2;
console.log(`Subtraction of ${Number1} and ${Number2} is : ${value_req}`);
value_req=Number1*Number2;
console.log(`Multiplication  of ${Number1} and ${Number2} is : ${value_req}`);
value_req=Number1/Number2;
console.log(`Division of ${Number1} and ${Number2} is : ${value_req}`);
value_req=Number1%Number2;
console.log(`Reminder of division  of ${Number1} and ${Number2} is : ${value_req}`);
//Comparison and Logical Operators :
let sale_manager_salary=90000;
let emp_salary_per_day=7500;
if (sale_manager_salary<emp_salary_per_day) {
    console.log(`Sales manager salary is :${sale_manager_salary}`);

} else {
    console.log(`Employee salary is ${emp_salary_per_day}`);
}
if (sale_manager_salary>emp_salary_per_day|| sale_manager_salary<100000) {
    console.log(`Sales manager salary is greater than employe salary : ${sale_manager_salary}`);
} else {
    console.log(`Employee salary is greater than sales manager : ${emp_salary_per_day}`);
}
const int_1=9;

const Required_value = int_1 >0 ? "positive number :  " : "Negative number ";
console.log(Required_value,int_1)
