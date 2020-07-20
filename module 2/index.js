// const myNumber = 7;
// const yourNumber =6; 
// // const result = myNumber + yourNumber;
// console.log (result);


// const radius = 10;
// const P = 3.14;
// const result = ( P * (Math.pow( radius , 2 )))
// console.log (result);


// const a = "дима";
// const b = 30 ;
// const c = "спать" ;
// const show =`Здравствуй меня зовут ${a} мне ${b} я люблю ${c}`;
// console.log (show);


// let name = prompt("введите название")
// let result
// if 
// (name==="ECMAscrit")
// {result="верно"}
// else {
//     result="не верно";
// }
// console.log (result);

// let result = 0;
// let a = 0;
// let b = 0;
// (a+b < 4) ? result='мало' : result='много';
// console.log (result);



// const age = 90;
// let result
// if (age >= 14 && age <=80 ) {result='верное'}
// else {result='не верно'};
// console.log (result);

//  if (-1 || 0) alert( ‘first’ );
//  if (-1 && 0) alert( ‘second’ );
//  if (null || -1 && 1) alert( ‘third’ );


//     const login = prompt('введите логин');
//     let password = "";
//     let message = '';
//     if (login === null) { console.log('отменено пользователем') }
//     else if (login !== 'Админ'){console.log ('я вас не знаю')}
//    else if (login === 'Админ') { password = prompt('введите пароль')
//     if (password === 'Я главный') { console.log ('Здравствуйте!') }
//     else if ( password === null ) { console.log ('отменено') }
//     else { console.log('неверный пароль') };
//  }
    
//    const max = 10;
//    for (let i = 2; i < max ; i += 2) {
//        console.log (i);
//    }
  
    


// let number;
// do {
//     number = prompt ('введите число' );
// }
// while (number <=100 & number);
const add = function(a, b, c) {
    return a + b + c;
  };
  
  // 1, 2, 3 это аргументы
  const result = add(1, 2, 3);
  console.log(result); // 6
  
  // 5, 10, 15 это аргументы
  console.log(add(5, 10, 15)); // 30