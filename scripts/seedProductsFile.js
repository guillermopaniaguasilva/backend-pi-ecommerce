/**
 * Seeds the products.json file with some test products.
 */

const fs = require('fs');
const { createRandomCode } = require('../src/utils/random');

const products = [
  {
    id: 1,
    timestamp: Date.now(),
    name: 'Guitarra',
    description: 'Gran guitarra',
    code: createRandomCode(),
    price: 250000,
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/170.jpg',
    stock: 10,
  },
  {
    id: 2,
    timestamp: Date.now(),
    name: 'Bajo',
    description: 'Excelente bajo',
    code: createRandomCode(),
    price: 250000,
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/170.jpg',
    stock: 10,
  },
  {
    id: 3,
    timestamp: Date.now(),
    name: 'Batería',
    description: 'Set de batería',
    code: createRandomCode(),
    price: 250000,
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/170.jpg',
    stock: 10,
  },
];

(async function () {
  await fs.promises.writeFile('data/products.json', JSON.stringify(products));
})();
