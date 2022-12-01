// Exporting module
console.log('Exporting module');

const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 270;
const totalQuantity = 300;

export { totalPrice, totalQuantity as tq };
