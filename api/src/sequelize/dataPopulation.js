const { Product, Category } = require("../db");

const MOCK_CATEOGRIES = require("./MOCK_CATEOGRIES.json");
const MOCK_PRODUCTS = require("./MOCK_PRODUCTS.json");

function dataPopulation() {
  return (
    Category.bulkCreate(MOCK_CATEOGRIES), 
    Product.bulkCreate(MOCK_PRODUCTS)
  );
}

module.exports = { dataPopulation };
