// // Importing Module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// console.log('Importing module');
// addToCart('eggs', 10);
// console.log(price, tq);

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

if (module.hot) {
  module.hot.accept();
}
