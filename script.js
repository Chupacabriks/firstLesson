'use strict';
//БЛОК ОБЪЯВЛЕНИЯ
// Присвоить значения 
let title;
let screens;
let screenPrice;
let adaptive;
let fullPrice;
let allServicePrices;
let servicePercentPrice;
let service1;
let service2;

const rollback = 12;

//БЛОК ОПИСАНИЯ ФУНКЦИЙ



//обозначаем эти функции 

//название 
const getTitle = function () {
  let string = title.trim().toLowerCase();
  return (title = string.charAt(0).toUpperCase() + string.slice(1));
};

const getScreenPrice = function () {
  do {
    screenPrice = prompt('Сколько будет стоить данная работа?');
    if (screenPrice !== null) {
      screenPrice = screenPrice.trim();
    }
  } while (!isNumber(screenPrice));
};

const getAllServicePrices = function () {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    let price;
    if (i === 0) {
      service1 = prompt('Какой дополнительный тип услуги нужен?');
    } else if (i === 1) {
      service2 = prompt('Какой дополнительный тип услуги нужен?');
    }
    do {
      price = prompt('Сколько это будет стоить?');
      if (price === null || price.trim() === '') {
        price = 0;
        break;
      }
      price = price.trim();
    } while (!isNumber(price));
    sum += +price;
  }
  return sum;
};


//проверка числа
const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

//functionDecloration
const getFullPrice = function () {
  return Number(screenPrice) + Number(allServicePrices);
};

const getServicePercentPrices = function () {
  return fullPrice * (1 - rollback / 100);
};

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

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
};

//какие функции для вопросов пользователю надо вызвать: 
const asking = function () {
  title = prompt('Как называется Ваш проект?');
  screens = prompt('Какие типы экранов нужно разработать?', 'Простые и сложные');
  screenPrice = getScreenPrice();
  adaptive = confirm('Нужен ли адаптив на сайте?');
  allServicePrices = getAllServicePrices();
};

//БЛОК ФУНКЦИОНАЛА
asking();
title = getTitle();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

// БЛОК ВЫЗОВА
console.log('Стоимость всех доп.услуг:', allServicePrices); //стоимость всех доп услуг
console.log(getRollBackMessage(fullPrice)); //скидка пользователю 
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);
console.log('Типы экранов:' + screens.split()); //типы экранов
console.log('Итоговая стоимость: ' + servicePercentPrice.toFixed(2));//итоговая стоимость