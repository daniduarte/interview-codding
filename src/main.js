'use strict';

const Product = require('./classes/Product');
const product1 = new Product('nombre', 10, 100);

console.log('product1 name', product1.getName());
console.log('product1 sellIn', product1.getSellIn());
console.log('product1 price', product1.getPrice());
