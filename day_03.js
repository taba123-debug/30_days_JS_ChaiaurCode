//Activity #1
//Task#1
let user_num=-9;
if (user_num>0) {
    console.log(`number is positive :${user_num}`);
}
 else if(user_num<0)
 {
    console.log(`number is negative : ${user_num}`);
}
else
{
    console.log(`user number is zero !` );
}
//Task#2
let candidate_age=18;
if (candidate_age>=18) {
    console.log(`candidate is eligible for vote :) `);
} else {
    console.log(`candidate is not eligible for vote :)`);
}
//Activity#2
//Task#3
let num1=9;
let num2=87;
let num3=99;
if (num1>num2 &&num1>num3) 
{
    console.log(`${num1} is greater than ${num2} and ${num3} `);
} 
else if(num2>num1 && num2>num3){
    console.log(`${num2} is greater than ${num1} and ${num3} `);

}
else
{
    console.log(`${num3} is greater than ${num1} and ${num2} `);

}
let week_day=7;

switch (week_day) {
    case 1:
      console.log(` Today is Monday!`);
      break;
    case 2:
      console.log(`Today is Tuesday!`);
      break;
    case 3:
      console.log(`Today is Wednesday!`);
      break;
    case 4:
        console.log('Today is Thursday');
    break;
    case 5:
        console.log('Today is Friday');
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
    default:
      break;
  }
  let score=75;
  switch (score) {
    case score=85:
        console.log(" Student Grade is A-");
        break;
    case score=80:
        console.log("Student Grade is B+");
        break;
    case score =75:
        console.log('Grade is B-');
        break;
    case score=70:
        console.log('Grade is C');
        break;
    case score=65:
        console.log('Grade is D');
        break;
    case score=60:
        console.log('Grade is F');
        break;
    default:
        break;
  }
  let ticket_price=670;
let message=ticket_price>=600 ? "Ticket Price is greater than 600 :)"  :" Ticket Price is less than 600 :) ";
console.log(message);

  // leap year :)

  function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  
  // Test the function
  console.log(isLeapYear(2020)); // true
  console.log(isLeapYear(2019)); // false
  console.log(isLeapYear(2000)); // true
  console.log(isLeapYear(1900)); // false