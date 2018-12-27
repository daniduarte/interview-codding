'use strict';

const chai = require('chai');
const assert = chai.assert;
const Product = require('../src/classes/Product');
const CarInsurance = require('../src/classes/CarInsurance');

const increaseByOne = require('../src/helpers/increaseByOne');
const increaseByTwo = require('../src/helpers/increaseByTwo');
const increaseByThree = require('../src/helpers/increaseByThree');
const decreaseByOne = require('../src/helpers/decreaseByOne');
const decreaseByTwo = require('../src/helpers/decreaseByTwo');
const decreaseByThree = require('../src/helpers/decreaseByThree');
const getMaxPriceVerified = require('../src/helpers/getMaxPriceVerified');


describe('Helpers', function () {
  let initialValue = 10;

  describe('increaseByOne', function () {
    it ('Should increase by one', function () {
      assert.equal(increaseByOne(initialValue), initialValue + 1);
    });
  });

  describe('increaseByTwo', function () {
    it ('Should increase by two', function () {
      assert.equal(increaseByTwo(initialValue), initialValue + 2);
    });
  });

  describe('increaseByThree', function () {
    it ('Should increase by three', function () {
      assert.equal(increaseByThree(initialValue), initialValue + 3);
    });
  });

  describe('decreaseByOne', function () {
    it ('Should decrease by one', function () {
      assert.equal(decreaseByOne(initialValue), initialValue - 1);
    });
  });

  describe('decreaseByTwo', function () {
    it ('Should decrease by two', function () {
      assert.equal(decreaseByTwo(initialValue), initialValue - 2);
    });
  });

  describe('decreaseByThree', function () {
    it ('Should decrease by three', function () {
      assert.equal(decreaseByThree(initialValue), initialValue - 3);
    });
  });
});


describe('Classes validations', function () {

  let productName = 'Medium Coverage';
  let productSellIn = 10;
  let productPrice = 100;
  let product = new Product(productName, 10, 100);

  describe('Person', function () {

    it ('Should valid class', function () {
      assert.typeOf(product, 'object');
    });

    it ('Should return name', function () {
      assert.equal(product.getName(), productName);
    });

    it ('Should return sellIn', function () {
      assert.equal(product.getSellIn(), productSellIn);
    });

    it ('Should return price', function () {
      assert.equal(product.getPrice(), productPrice);
    });

  })
});

