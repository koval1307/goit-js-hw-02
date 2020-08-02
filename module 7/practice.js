

// import pokemon from "./pokemon.js"
// "use strict"


// let body = document.querySelector('body');
// let box = document.createElement('div');
// let title = document.createElement('h2')
// body.append(box);

// body.append(title);

// console.log

// box.style.width = '300px';
// box.style.height = '300px';
// box.style.backgroundColor = 'grey';
// box.style.borderRadius = '50%';
// box.style.margin = 'auto';


// const name = "генератор защитного поля";
// let price = 1000;
// console.log(`Выбран ${name}, цена за штуку ${price} `)
// price = 2000;
// console.log(`Выбран ${name}, цена за штуку ${price} `)


// const total = 100;
// const ordered = 150;

// if (ordered > total) {console.log("На складе недостаточно твоаров!")}
// else {console.log("Заказ оформлен, с вами свяжется менеджер")};

// const ADMIN_PASSWORD = '    ';
// let message;

// let password = prompt("введите пароль")
// if (password === null) {message = 'отменено пользователем'}
// else if (password === ADMIN_PASSWORD) {message = "Добро пожаловать"}
// else {message = "Доступ запрешен неверный пароль"};
// alert(message);


// let credits = 23580;
// let pricePerDroid = 3000;
// let totalPrice;

// let amount = prompt()

// if (amount === null) {
//     console.log("отменено пользователем")
// }
// else  {totalPrice=pricePerDroid * amount};
// if(totalPrice > credits && amount !==null){alert('недостаточно кредитов')}
// else if (totalPrice < credits && amount !== null) {credits = credits - totalPrice, console.log (`Вы купили ${amount} дроидов, на счету осталось ${credits}`)};

// const a = (0.5 + 0.1);
// const b = (0.6);
// const c = (9 + "1");
// const d = (90 - "1");
// console.log (a==b);
// console.log (c);
// console.log (d);


// const name = prompt("введите страну")
// let price

// switch (name.toLowerCase()) {
//     case "китай":
//         price=100;
//         break;
// case  "чили" :
// price=250;
// break;
// case "австралия" :
//     price = 170;
//     break;
//     case "индия":
//         price = 80;
//         break;
//         case "ямайка":
//             price = 120;
//             break;

//     default:alert ("В вашей стране доставка не доступна")
//         break;
// }

// console.log (`Доставка в ${name} будет стоить ${price} кредитов`);

// let input;
// let total = 0;

// while (input !== null)
// {let input =prompt("введите число")
// if (input === null ) {console.log ("отменено пользователем");
// break;}
// input = Number(input);
// const notANumber = isNaN(input);
// if (notANumber){console.log("введено не число");
// continue;};
// total+=input;}
// console.log(`общая сумма ${total}`);

const logItems = function(array) {
    // твой код
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
  
  logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);