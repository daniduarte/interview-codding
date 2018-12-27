'use strict';

const chai = require('chai');
const assert = chai.assert;
const Product = require('../src/classes/Product');
const CarInsurance = require('../src/classes/CarInsurance');

describe('Classes validations', function () {

  let productName = 'Producto';
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

