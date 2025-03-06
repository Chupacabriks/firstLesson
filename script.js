'use strict';

// Присвоить значения (урока 2)
let title = prompt('Как называется Ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let rollback = 72;
let adaptive = confirm('Нужен ли адаптив на сайте?');

// Урок 3. каждый вопрос по 2 раза.
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

// Вычислить итоговую стоимость работы учитывая стоимость верстки экранов и дополнительных услуг (screenPrice + servicePrice1 + servicePrice2) и результат занести в переменную fullPrice
const fullPrice = screenPrice + servicePrice1 + servicePrice2;

// Вывести в консоль
console.log(typeof title);
console.log(typeof adaptive);
console.log(screens.length);
const stre = "Стоимость верстки экранов" + " " + screenPrice + " " + "миллионов долларов";
console.log(stre);
const strs = "Стоимость разработки сайтов " + " " + fullPrice + " " + "долларов";
console.log(strs);

// нижний регистр 
console.log(screens.toLowerCase());

//массив
console.log(screens.split());

//процент отката
let perOfRoll = (fullPrice * (rollback / 100));
console.log('Процент отката:' + ' ' + perOfRoll);

//Объявить переменную servicePercentPrice и занести в нее итоговую стоимость за вычетом отката посреднику (servicePercentPrice = fullPrice - Откат посреднику), округлив результат в большую сторону (методы объекта Math в помощь). Вывести servicePercentPrice в консоль.
const servicePercentPrice = Math.ceil(fullPrice - perOfRoll);
console.log(servicePercentPrice);

//(Написать конструкцию условий (расчеты приведены в рублях) (вывести в консоль)
//- Если fullPrice больше 30000, то “Даем скидку в 10%” 
//- Если fullPrice больше 15000 и меньше 30000, то сообщение “Даем скидку в 5%” 
//- Если fullPrice меньше 15000 и больше 0 то в консоль вывести сообщение “Скидка не предусмотрена” 
//- Если отрицательное значение то вывести “Что то пошло не так” 
//- Учесть варианты 0, 15000 и 30000(к какому уровню не важно)

if (fullPrice > 30000) {
  console.log('Дааем скидку в 10%')
} else if (fullPrice > 15000 && fullPrice < 30000) {
  console.log('Даем скидку в 5%')
} else if (fullPrice < 15000 && fullPrice > 0) {
  console.log('Скидка не предусмотрена')
} else if (fullPrice < 0) {
  console.log('Что-то пошло не так')
}

