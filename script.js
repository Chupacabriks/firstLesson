'use strict';


const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  fullPrice: 0,
  allServicePrices: 0,
  servicePercentPrice: 0,
  service1: '',
  service2: '',
  rollback: 10,

  start: function () {
    this.asking(),
      this.allServicePrices = this.getAllServicePrices(),
      this.fullPrice = this.getFullPrice(),
      this.getRollBackMessage(),
      this.servicePercentPrice = this.getServicePercentPrices(),
      this.title = this.getTitle(),
      this.logger()
  },

  asking: function () {
    this.title = prompt('Как называется Ваш проект?', 'Калькулятор верстки');
    this.screens = prompt('Какие типы экранов нужно разработать?', 'Простые и сложные');
    do {
      this.screenPrice = prompt('Сколько будет стоить данная работа?');
      if (this.screenPrice !== null) {
        this.screenPrice = this.screenPrice.trim();
      }
    } while (!this.isNumber(this.screenPrice));
    this.adaptive = confirm('Нужен ли адаптив на сайте?');
  },

  //проверка числа
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  getTitle: function () {
    let string = this.title.trim().toLowerCase();
    return (this.title = string.charAt(0).toUpperCase() + string.slice(1));
  },

  getAllServicePrices: function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
      let price = 0;
      if (i === 0) {
        this.service1 = prompt('Какой дополнительный тип услуги нужен?');
      } else if (i === 1) {
        this.service2 = prompt('Какой дополнительный тип услуги нужен?');
      }
      do {
        price = prompt('Сколько это будет стоить?');
        if (price === null || price.trim() === '') {
          price = 0;
          break;
        }
        price = price.trim();
      } while (!this.isNumber(price));
      sum += +price;
    }
    return sum;
  },

  getFullPrice: function () {
    return +this.screenPrice + this.allServicePrices;
  },

  getServicePercentPrices: function () {
    return this.fullPrice - (this.fullPrice * (this.rollback / 100));
  },

  getRollBackMessage: function (price) {
    if (price >= 30000) {
      return 'Даем скидку в 10%'
    } else if (price >= 15000 && price < 30000) {
      return 'Даем скидку в 5%'
    } else if (price < 15000 && price >= 0) {
      return 'Скидка не предусмотрена'
    } else if (price < 0) {
      return 'Что-то пошло не так'
    }
  },

  logger: function () {
    console.log(this.getRollBackMessage(this.fullPrice)); //скидка пользователю 
    console.log('Итоговая стоимость: ' + this.servicePercentPrice);//итоговая стоимость

    for (let key in this) {
      console.log("Ключ:" + key + "Значение:" + this[key])
    }
  }
};

appData.start();