/**
 * Seeds the carts.js with no carts in the application.
 */

const fs = require('fs');

const carts = [];

(async function () {
  await fs.promises.writeFile('data/carts.json', JSON.stringify(carts));
})();
