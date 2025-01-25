
/* Завдання 1 */
/* const categories = document.querySelectorAll('#categories .item');
    

const output = document.getElementById('output');

const totalCategories = document.createElement('p');
totalCategories.textContent = `У списку ${categories.length} категорії.`;
output.appendChild(totalCategories);


categories.forEach(category => {
  const title = category.querySelector('h2').textContent; 
  const itemsCount = category.querySelectorAll('ul li').length; 

  const categoryInfo = document.createElement('p');
  categoryInfo.innerHTML = `Категорія: ${title}<br>Kількість елементів ${itemsCount}`;
  output.appendChild(categoryInfo);
}); */


/* Завдання 2*/
/* 
const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];


const ingredientList = document.querySelector('#ingredients');


const items = ingredients.map(ingredient => {
    const li = document.createElement('li'); 
    li.textContent = ingredient; 
    return li; 
});


ingredientList.append(...items);
 */

/* Завдання 3 */

{/* <ul id="gallery"></ul> */}
/* 
Використовуй масив об'єктів images для створення тегів img вкладених в li. Для створення розмітки використовуй шаблонні рядки і insertAdjacentHTML().

Всі елементи галереї повинні додаватися в DOM за одну операцію вставки.
Додай мінімальне оформлення галереї флексбоксами або грід через css-класи. */
/* 
const images = [
 {
  url:
   'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'White and Black Long Fur Cat',
 },
 {
  url:
   'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
 },
 {
  url:
   'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Group of Horses Running',
 },
];


const imagesList = document.querySelector('#gallery')

const img = images.map(({ url, alt }) =>
    `<li class="gallery-item">
      <img src="${url}" alt="${alt}" class="gallery-image">
    </li>`
)

imagesList.insertAdjacentHTML('afterbegin', img);


 */

/* Завдання 4
Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.

Створи змінну counterValue в якій буде зберігається поточне значення лічильника.
Створи функції increment і decrement для збільшення і зменшення значення лічильника. */
/* Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу/* 
 */ 

let counterValue = 0;

// Знаходимо елементи інтерфейс
const valueEl = document.querySelector('#value');
const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');

const increment = () => {
  counterValue += 1;
  updateValue();
};


const decrement = () => {
  counterValue -= 1;
  updateValue();
};


const updateValue = () => {
  valueEl.textContent = counterValue;
};


incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);