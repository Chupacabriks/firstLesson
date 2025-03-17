'use strict';
//БЛОК ОБЪЯВЛЕНИЯ
// Присвоить значения 
let title = prompt('Как называется Ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
let rollback = 72;
let allServicePrices;
let servicePercentPrice;
// Вычислить итоговую стоимость работы 
let fullPrice = screenPrice + servicePrice1 + servicePrice2;

let perOfRoll = (fullPrice * (rollback / 100));


const stre = "Стоимость верстки экранов" + " " + screenPrice + " " + "миллионов долларов";
const strs = "Стоимость разработки сайтов " + " " + fullPrice + " " + "долларов";



//БЛОК ОПИСАНИЯ ФУНКЦИЙ 
let getAllServicePrices = function (servicePrice1, servicePrice2) {
  return servicePrice1 + servicePrice2;
}


//functionDecloration 
function getFullPrice(screenPrice, allServicePrices) {
  return screenPrice + allServicePrices;
}

let getTitle = function (title) {
  let string = title.trim().toLowerCase();
  return (title = string.charAt(0).toUpperCase() + string.slice(1));
}

let getServicePercentPrices = function (fullPrice, perOfRoll) {
  return Math.ceil(fullPrice - perOfRoll);
}

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
}

const getRollBackMessage = function (price) {
  if (price > 30000) {
    return 'Даем скидку в 10 %'
  } else if (price >= 15000 && price <= 30000) {
    return 'Даем скидку в 5%'
  } else if (price < 15000 && price > 0) {
    return 'Скидка не предусмотрена'
  } else if (price < 0) {
    return 'Что-то пошло не так'
  }
}

//БЛОК ФУНКЦИОНАЛА
allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
fullPrice = getFullPrice(screenPrice, allServicePrices);
title = getTitle(title);
servicePercentPrice = getServicePercentPrices(fullPrice, perOfRoll);

//БЛОК ВЫВОДА
showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);
//вызовы typeof

console.log(screens.split()); //типы экранов //массив
console.log(getRollBackMessage(fullPrice)); //скидка пользователю 
console.log('Итоговая стоимость: ' + servicePercentPrice);//итоговая стоимость

