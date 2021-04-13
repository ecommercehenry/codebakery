const {categories} = require("./categories");
const {product} = require("./product");
const {productById} = require("./productById");
const {getProductByCategoryName} = require("./productByCategoryName");
const {getAllCategories}= require("./categories");
const {productCategory} = require("./productCategory");
const {getProductByName } = require("./getProductByProductName")
const {getProductByArray} = require("./getProductByArray")


// getProductByCategoryName
module.exports = {categories, product, productById , getProductByCategoryName, getAllCategories,productCategory, getProductByName, getProductByArray}
