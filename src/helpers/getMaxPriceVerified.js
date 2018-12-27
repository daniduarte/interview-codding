'use strict';

function getMaxPriceVerified (price) {
  if (price > 50) {
    return 50
  }
  return price;
}

module.exports = getMaxPriceVerified;

