'use strict';

const increaseByOne = require('../helpers/increaseByOne');
const increaseByTwo = require('../helpers/increaseByTwo');
const increaseByThree = require('../helpers/increaseByThree');
const decreaseByOne = require('../helpers/decreaseByOne');
const decreaseByTwo = require('../helpers/decreaseByTwo');
const decreaseByThree = require('../helpers/decreaseByThree');
const getMaxPriceVerified = require('../helpers/getMaxPriceVerified');

function CarInsurance () {

  /*
   * Public exposed methods
   */

   this.addProduct = _addProduct;
   this.getProducts = _getProducts;
   this.getProductsAsJson = _getProductsAsJson;
   this.updatePrice = _updatePrice;

  /*
   * Private attributes
   */

  let _products = [];

  /*
   * Constructor
   */ 

  _constructor();

  function _constructor () {
  }

  function _getProducts () {
    return _products;
  }

  function _getProductsAsJson () {
    let _productsAsJson = [];
    _products.map(function (_product) {
      _productsAsJson.push({
        name: _product.getName(),
        sellIn: _product.getSellIn(),
        price: _product.getPrice()
      })
    });
    return _productsAsJson;
  }

  function _addProduct (product) {
    _products.push(product);
  }

  function _updatePrice () {
    _products.map(function (coverage) {

      let _newCoverage;

      switch(coverage.getName()) {

        case 'Medium Coverage':
          _newCoverage = _mediumCoverage(coverage.getSellIn(), coverage.getPrice());
          coverage.setSellIn(_newCoverage[0]);
          coverage.setPrice(_newCoverage[1]);
          break;

        case 'Full Coverage':
          _newCoverage = _fullCoverage(coverage.getSellIn(), coverage.getPrice());
          coverage.setSellIn(_newCoverage[0]);
          coverage.setPrice(_newCoverage[1]);
          break;

        case 'Low Coverage':
          _newCoverage = _lowCoverage(coverage.getSellIn(), coverage.getPrice());
          coverage.setSellIn(_newCoverage[0]);
          coverage.setPrice(_newCoverage[1]);
          break;

        case 'Mega Coverage':
          _newCoverage = _megaCoverage(coverage.getSellIn(), coverage.getPrice());
          coverage.setSellIn(_newCoverage[0]);
          coverage.setPrice(_newCoverage[1]);
          break;

        case 'Special Full Coverage':
          _newCoverage = _specialFullCoverage(coverage.getSellIn(), coverage.getPrice());
          coverage.setSellIn(_newCoverage[0]);
          coverage.setPrice(_newCoverage[1]);
          break;

        case 'Super Sale':
          _newCoverage = _superSaleCoverage(coverage.getSellIn(), coverage.getPrice());
          coverage.setSellIn(_newCoverage[0]);
          coverage.setPrice(_newCoverage[1]);
          break;

        default:
          // void
      }

    })
  }

  /*
   * ---------------------
   * Coverage logics
   * ---------------------
   */

  /*
   * Actually increases in price the older it gets
   */
  function _fullCoverage (sellIn, price) {
    if (price <= 50) {
      if (price == 0 || price == 1) {
        price = increaseByOne(price);
      } else {
        price = increaseByTwo(price);
      }

      price = getMaxPriceVerified(price);
    }

    sellIn = decreaseByOne(sellIn);

    return [sellIn, price];
  }

  /*
   * Being a legendary product, never has to be sold or decreases in price
   */
  function _megaCoverage (sellIn, price) {
    return [sellIn, price];
  }

  /*
   * Like full coverage, increases in price as its sellIn value approaches:
   * - price increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but.
   * - price drops to 0 when no more days left (and the product is not valid anymore).
   */
  function _specialFullCoverage (sellIn, price) {
    if (price <= 50) {
      if (sellIn <= 0) {
        price = 0;
      } else if (sellIn <= 5) {
        price = increaseByThree(price);
      } else if (sellIn >= 6 && sellIn <= 10) {
        price = increaseByTwo(price);
      } else {
        price = increaseByOne(price);
      }

      price = getMaxPriceVerified(price);
    }

    sellIn = decreaseByOne(sellIn);

    return [sellIn, price];
  }

  /*
   * Products degrade in price twice as fast as normal Products
   */
  function _superSaleCoverage (sellIn, price) {
    if (price >= 1) {
      price = decreaseByOne(price);
    } else {
      price = 0;
    }

    sellIn = decreaseByOne(sellIn);

    return [sellIn, price];
  }

  /*
   * TODO: Logic must be defined by requierements list, by the way it returns same values
   */
  function _mediumCoverage (sellIn, price) {
    if (price > 0) {
      if (sellIn <= 0) {
        price = decreaseByTwo(price)
      } else {
        price = decreaseByOne(price);
      }
    } else {
      price = 0;
    }

    sellIn = decreaseByOne(sellIn);

    return [sellIn, price];
  }

  /*
   * TODO: Logic must be defined by requierements list, by the way it returns same values
   */
  function _lowCoverage (sellIn, price) {
    if (sellIn <= 0) {
      price = 0
    } else {
      price = decreaseByOne(price);
    }

    sellIn = decreaseByOne(sellIn);

    return [sellIn, price];
  }

}

module.exports = CarInsurance;
