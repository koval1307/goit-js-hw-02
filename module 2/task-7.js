"use strict "
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const isLoginValid = function(login) {
for (let i=0; i<login.length; i += 1)
   if (login.length >= 4 && login.length < 16) {
            return true;
        }
        else {return false }
   };
   console.log(isLoginValid('Ajax'))
  
  const isLoginUnique = function(allLogins,login) {
      
    for (let i=0; i<allLogins.length; i++)
if (login === allLogins[i]) {return false}
else {return true;
  };
  console.log(isLoginUnique(allLogins, 'Ajax'))
}
  const addLogin = function (allLogins, login) {
  if (!isLoginValid(login)) {
        return "Ошибка! Логин должен быть от 4 до 16 символов";
      }
      if (!isLoginUnique(allLogins, login)) {
        return "Такой логин уже используется!";
      }
      allLogins[allLogins.length] = login;
   return "Логин успешно добавлен!";
 };

  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
  console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
  console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
  console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
  

