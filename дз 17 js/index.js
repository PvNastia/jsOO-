/* Створити розмітку з кнопкою та текстовим полем. За допомогою JavaScript отримати доступ до кнопки та текстового поля за їх ідентифікаторами та змінити текст на кнопці на значення текстового поля.
 */
const mainBtn = document.querySelector('.btn')
mainBtn.style.backgroundColor = 'red';
mainBtn.style.color = 'white';
mainBtn.textContent = 'UNSUBSCRIBE'
mainBtn.style.width = '100px';
mainBtn.style.height = '40px';


/* Створити розмітку з заголовком та зображенням. За допомогою JavaScript отримати доступ до зображення та змінити значення атрибута "src" на шлях до іншого зображення. */

const imgOne = document.querySelector('.img-cat-one')
imgOne.src = './images/627d0cbe0c5bbd447a635839_new-kitten-checklist.jpg'
imgOne.style.width = '600px'
/* Створити розмітку з посиланням та зображенням. За допомогою JavaScript отримати доступ до посилання та змінити значення атрибута "href" на нову URL-адресу. Також отримати доступ до зображення та додати новий атрибут "alt" з описом зображення. */

const dogAdress = document.querySelector('.adress-dog')
dogAdress.href = 'https://media.4-paws.org/f/3/9/1/f39115c5c798651f95141c37b692f76b669af761/VIER%20PFOTEN_2019-03-15_001-2886x1999-1920x1330.webp'
const dogImg = document.querySelector('.img-dog')
dogImg.src = 'https://media.4-paws.org/f/3/9/1/f39115c5c798651f95141c37b692f76b669af761/VIER%20PFOTEN_2019-03-15_001-2886x1999-1920x1330.webp'
dogImg.style.width =' 700px'
dogImg.alt = 'DOG'
/* Створити розмітку зі списком елементів. За допомогою JavaScript отримати доступ до першого елемента списку та змінити його вміст на новий текст. */
const myList = document.querySelector('.list');
myList.firstElementChild.textContent = 'hello world∞';