// ("use strict")
// const storeStatiscs = {
//     shirt : 0,
//     pants : 0,
//     shoes : 0,
//  };


// const SoldItems = function (name, size ,brand, amount) {
//     this.name = name;
//     this.size = size;
//     this.brand = brand;
//     this.amount = amount;
//     this. greet  = function (customer){
//         console.log (`Hello ${customer}, you purchased ${amount} ${this.brand} ${this.name} in size ${size}`);
//     }
// this.itemSold = function(amount, name) {
// if (name === "shirt") {storeStatiscs.shirt += amount}

// else if (name === "pants") {storeStatiscs.pants += amount}


// else if (name === "shoes") {storeStatiscs.shoes += amount}
// }}
// const soldItems = new SoldItems("shirt" , "l" , "adidas", 2);

// soldItems.greet ("Ivan");
// soldItems.itemSold(4,"shirt");
// soldItems.itemSold(2,"shoes");

// console.log (storeStatiscs);

// 1
// const a = ['a', 'b', 'c'];
// const b = [1,2,3];
// let c = [...a, ...b];
// console.log (c);
// 2
// b.push(a[0], a[1], a[2]);
// console.log (b);
// 3
// const b = [1,2,3];
// const reversed = b.reverse();
// console.log(reversed);
// 4
// const d = [1,2,3,4,5];
// console.log (d.slice(0,3))

// 5    

// let t = [1, 2, 3, 4, 5];
// t.splice(1,2)
// console.log (t);



// const a = [1, 2, 3, 4, 5]; 


// b=Math.floor(Math.random() * a.length)
// console.log (a[b]);


// let b = prompt ('введите число');
// b = b.split("");
// let arr = b;

// let creaturesArr = [];
// class Creature {
//     constructor(type, planet, status, sex) {
//         this.type = type;
//         this.planet = planet;
//         this.status = status;
//         this.sex = sex;
//     }
//     get show() {
//         return (`This ${this.type} is from ${this.planet} and has ${this.status} status`)
//     }
//     set changePlanet (str) {
//         this.planet = str;
//         return this.planet
//     }
//     static intro() {
//         console.log("There is a billions types of creatures all around the world!")
//     }
//     static checkCreatures() {
//         console.log(creaturesArr)
//     }
// }
// class Human extends Creature {
// constructor(name, type, planet, status, sex, nationality) {
//         super(type,planet, status, sex);
//         this.name = name;
//         this.nationality = nationality;
// }
// addToCreaturesList() {
//     creaturesArr.push({name : this.name, planet:this.planet, nationlity: this.nationality})
// }
// }
// let Adam = new Human('Adam', 'human', 'Mars', 'three-dimensional', 'male', 'Ukrainian');
// Adam.addToCreaturesList();
// let Eva = new Human('Eva', 'human', 'Venus', 'three-dimensional', 'female', 'Ukrainian')
// Eva.addToCreaturesList();
// Creature.checkCreatures();

// class Marthian extends Creature {
//     constructor(name, type, planet,status,sex,power,ability) {
//         super(type,planet,status,sex)
//         this.name = name;
// this.power = power;
// this.ability = ability;
//     }
//     addToCreaturesList() {
//         creaturesArr.push({name : this.name, type: this.type, planet:this.planet, status:this.status,  sex:this.sex, power:this.power, ability:this.ability })
  
// }}
// let Oleg = new Marthian ('Oleg', 'Martian','Mars','five-dimentional', 'undefined', 'immortality', 'levitation');
// Oleg.addToCreaturesList();

// Creature.checkCreatures();

// ________________________TASK#1
// Реализуйте класс Student (Студент), который будет наследовать от класса User.
// Этот класс должен иметь следующие свойства:
//  name (имя, наследуется от User), surname (фамилия, наследуется от User),
//  year (год поступления в вуз).
//  Класс должен иметь метод getFullName() (наследуется от User),
// с помощью которого можно вывести одновременно имя и фамилию студента. 
// Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). 
// Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.
// Вот так должен выглядеть класс User, от которого наследуется наш Student:

// const currentTime = new Date().getFullYear();
// class User {
//     constructor(name, surname) {
//      this.name = name;
//      this.surname = surname;
//     }
//     
// }
// class Student extends User {
//     constructor (name, surname , year ){
//     super (name, surname);
//    this.year = year}

//   getFullName() {
//     return  this.name + "" + this.surname
//     }
// getCourse()
// {return currentTime -this.year }
// };



// // Вот так должен работать наш класс:
// let student = new Student('Иван', 'Иванов', 2017);
// console.log(student.name); //выведет 'Иван'
// console.log(student.surname); //выведет 'Иванов'
// console.log(student.getFullName()); //выведет 'Иван Иванов'
// console.log(student.year); //выведет 2017; //выведет 3 - третий курс, так как текущий год 2020
// console.log (student.getCourse());


