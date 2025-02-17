// Присвоить значения
let title = 'Урок02';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 7;
let rollback = 72;
let fullPrice = 999999;
let adaptive = false;

// Вывести в консоль
console.log(typeof title);
console.log(typeof fullPrice);
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
