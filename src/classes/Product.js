'use strict';

function Product (name, sellIn, price) {

  /*
   * --------------------------------
   * Public scope
   * --------------------------------
   */

  // Public exposed methods
  this.getName = _getName;
  this.getSellIn = _getSellIn;
  this.getPrice = _getPrice;

  // Private attributes
  let _name = null;
  let _sellIn = null;
  let _price = null;

  /*
   * Constructor
   */ 

  _constructor(name, sellIn, price);

  function _constructor (name, sellIn, price) {
    _setName(name);
    _setSellIn(sellIn);
    _setPrice(price);
  }

  function _getName () {
    return _name;
  } 
    
  function _getSellIn () {
    return _sellIn;
  } 
    
  function _getPrice () {
    return _price;
  } 
    
  function _setName (name) {
    if (name !== undefined) {
      _name = name;
    }
  }

  function _setSellIn (sellIn) {
    if (sellIn !== undefined) {
      _sellIn = sellIn;
    }
  }

  function _setPrice (price) {
    if (price !== undefined) {
      _price = price;
    }
  }

}

module.exports = Product;
