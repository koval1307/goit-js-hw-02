const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

  user.mood = "happy" ;
  console.log (user);
user.hobby = "skydiving";
console.log (user);
for (const key in user) {
    console.log('Key: ', key);
  }
  const keys = Object.keys(user);
 for (const key of keys ){
     console.log ("key", user[key]);
 }