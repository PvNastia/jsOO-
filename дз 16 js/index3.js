/* Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. При виклику буде отримувати один аргумент - початковий масив товарів, і записувати його у властивість items.

Додай методи класу:

getItems() — повертає масив поточних товарів
addItem(item) — отримує новий товар і додає його до поточних
removeItem(item) — отримує товар і, якщо він є, видаляє його з поточних
 */


class Storage {
    constructor(items){
        this.items= items;
    }
    getItems(){
       return this.items
        
    }
    addItem(item) {
        this.items.push(item);
      }
    removeItem(item) {
        const itemIndex = this.items.indexOf(item);

        if (itemIndex !== -1) {
          this.items.splice(itemIndex, 1);
        }
    
    


    }
}
const storage = new Storage([
 'Нанітоіди',
 'Пролонгер',
 'Залізні жупи',
 'Антигравітатор',
]);

const items = storage.getItems(); 
console.log(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд');
console.log(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');
console.log(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]