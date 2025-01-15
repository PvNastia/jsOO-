// Завдання 5

// Напиши клас Car із зазначеними властивостями і методами.



class Car {
    /*
     * Додай статичний метод `getSpecs(car)`,
     * який приймає об'єкт-машину як параметр і виводить
     * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
     */
   
    static getSpecs(car){ 
       console.log(`${car.maxSpeed}, ${car.speed}, ${car.isOn}, ${car.distance}, ${car.price}`)
    }
   
    /*
     * Конструктор отримує об'єкт налаштувань.
     *
     * Додай властивості майбутнього екземпляра класу:
     * speed - поточна швидкість, початкова 0
     * price - ціна автомобіля
     * maxSpeed - максимальна швидкість
     * isOn - заведений автомобіль, значення true або false. Спочатку false
     * distance - загальний кілометраж, спочатку 0
     */
    constructor({price, maxSpeed}) {
       this.speed = 0; 
       this.price = price; 
       this.maxSpeed = maxSpeed; 
       this.isOn = false; 
       this.distance = 0;  
    }
   
    get price(){ 
       return this._price; 
    }
    set price(new_price){ 
       this._price = new_price; 
   }
    /*
     * Додай геттер і сеттер для властивості price,
     * який буде працювати з властивістю ціни автомобіля.
     */
   
    /*
     * Додай код для того, щоб завести автомобіль
     * Записує у властивість isOn значення true
     */
    turnOn(isOn) {
       this.isOn = true; 
    }
   
    /*
     * Додай код для того, щоб заглушити автомобіль
     * Записує у властивість isOn значення false,
     * і скидає поточну швидкість в 0
     */
    turnOff() {
       this.isOn = false; 
       this.speed = 0; 
    }
   
    /*
     * Додає до властивості speed отримане значення,
     * за умови, що результуюча швидкість
     * не більше, ніж значення властивості maxSpeed
     */
    accelerate(value) {
       this.speed = Math.min(this.speed + value, this.maxSpeed);
   
    }
   
    /*
     * Забирає від властивості speed отримане значення,
     * за умови, що результуюча швидкість не менше нуля
     */
    decelerate(value) {
       this.speed = Math.max(this.speed - value, 0); 
    }
   
    /*
     * Додає в поле distance кілометраж (hours * speed),
     * але тільки в тому випадку, якщо машина заведена!
     */
    drive(hours) {
       if(this.isOn){ 
           this.distance += hours * this.speed;
       }
    }
   }
   
   const mustang = new Car({ maxSpeed: 200, price: 2000 });
   
   mustang.turnOn();
   mustang.accelerate(50);
   mustang.drive(2);
   
   Car.getSpecs(mustang);
   
   mustang.decelerate(20);
   mustang.drive(1);
   mustang.turnOff();
   
   Car.getSpecs(mustang);
   
   console.log(mustang.price); 
   mustang.price = 4000;
   console.log(mustang.price); 