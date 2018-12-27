'use strict';

const Product = require('./classes/Product');
const CarInsurance = require('./classes/CarInsurance');

const carInsurance = new CarInsurance;

carInsurance.addProduct(new Product('Medium Coverage', 10, 20));
carInsurance.addProduct(new Product('Full Coverage', 2, 0));
carInsurance.addProduct(new Product('Low Coverage', 5, 7));
carInsurance.addProduct(new Product('Mega Coverage', 0, 80));
carInsurance.addProduct(new Product('Mega Coverage', -1, 80));
carInsurance.addProduct(new Product('Special Full Coverage', 15, 20));
carInsurance.addProduct(new Product('Special Full Coverage', 10, 49));
carInsurance.addProduct(new Product('Special Full Coverage', 5, 49));
carInsurance.addProduct(new Product('Super Sale', 3, 6));

const productPrinter = function (product) {
  console.log(`${product.getName()}, ${product.getSellIn()}, ${product.getPrice()}`);
};

console.log('OMGHAI!');

for (let i = 0; i <= 30; i += 1) {
  console.log(`-------- day ${i} --------`);
  console.log('name, sellIn, price');
  carInsurance.getProducts().map(function(coverage){
    console.log(`${coverage.getName()}, ${coverage.getSellIn()}, ${coverage.getPrice()}`);
  });
  carInsurance.updatePrice();
  console.log('');
}

