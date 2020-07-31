"use strict "
// let schedule ={};


// const isEmpty = function(obj) {
//     for (let i in obj) {return false;}
//     return true;
// }
// isEmpty(schedule);
// alert( isEmpty(schedule) ); 
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); 


// let salaries = { John: 100, Ann: 160, Pete: 130};
// let sum = 0;
// for (let i in salaries) {sum+=salaries[i]}
// console.log (sum);
// let salaries = { John: 100, Ann: 160, Pete: 130};
// const values = Object.values(salaries);
// let sum = 0;
// for (const value of values) {sum +=value};
// console.log (sum);

// let menu = {width: 200, height: 300, title: "My menu"};
// const multiplyNumeric = function(obj) {
//     for (let key in obj) {if (typeof obj[key] === 'number') {
//     obj[key]*=2;}
//     }
// }
// multiplyNumeric (menu)
// console.log (menu);


// let user = {name: 'петр', surname: 'Петров', age: '', };
// let{name = 'Аноним', surname = 'Анонимович', age = ' 20лет'} = user;
// console.log ((name + ' ' + surname + ' ' + age));


// const fizzbuzz = function(n) {
//     for (i=1; i<133; i++ ) {
//         if(i%3==0) console.log("Fizz");
//         if(i%5==0) console.log("Buzz");
//         if (i % 5 != 0 && i % 3 != 0)
//          console.log ("FizzBuzz");

//     }


// }
// const printMessage = function (message) {
//     console.log (message);}
//     const higherOrderFunction = function(callback) {
//         const string = 'HOCs are awesome';
//         callback(string);
//       };
      
//       higherOrderFunction(printMessage);



//       / Напишите ф-цию, которая примает аргументами 2 числа,  задающих диапазон который нужно вывести в консоль
//       // если в числе есть 3 - в консоль вместо него выводиться "three"
//       // (то есть вместо 3, 13, 23 и т.д. должно быть "three")
// let a=3;
// let b = 0;
// let result = (a+b) < 4 ? "мало" : "много";
//  console.log (result);

// let message = login === 'сотрудник' ? "привет" :
// (login === "директор") ? "Здравствуйте" :
// (login === " ") ? "нет логина" :
// "";
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   function showOk() {
//     alert( "Вы согласны." );
//   }
  
//   function showCancel() {
//     alert( "Вы отменили выполнение." );
//   }
  
//   // использование: функции showOk, showCancel передаются в качестве аргументов ask
//   ask("Вы согласны?", showOk, showCancel);
// Петя бежит быстро, потому что Петя пытается поймать поезд.
// const petya = {
//     name: 'Petya',
//     showName() {
//       console.log(petya.name);
//     },
//   };
  
//   petya.showName();
// let user = {
//     name: "Джон",
//     go: function() { alert(this.name) }
//   };
  
//   (user.go)() // Джон