// "use strict"

// class Storage {
//     constructor (items){
//         this.items = items;
//     }
//     getItems() {
//             return this.items;
//        }
//           addItem(item) {
//             this.items.push(item);
//           }
//           removeItem(item) {
//             if (this.items.includes(item)) {
//              this.items.splice(this.items.indexOf(item), 1);
//             }
//           }
//         }
//     const storage = new Storage([
//         'Нанитоиды',
//         'Пролонгер',
//         'Железные жупи',
//         'Антигравитатор',
//       ]);
      
//       const items = storage.getItems();
//       console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
      
//       storage.addItem('Дроид');
//       console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
      
//       storage.removeItem('Пролонгер');
//       console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// const Storage = function (items) {
//     this.items = items;


// this.getItems = function (){
//     console.log(`items :   ${this.items}`)};
// this.addItem = function (item) {
//     this.items += item;
// };

// this.removeItem = function (item) {
//     this.items += item;
// }

    
// }
// const storage = new Storage([
//     'Нанитоиды',
//     'Пролонгер',
//     'Железные жупи',
//     'Антигравитатор',
//   ]);
  
//   const items = storage.getItems();
//   console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
//   storage.addItem('Дроид');
//   console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
//   storage.removeItem('Пролонгер');
//   console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]  
