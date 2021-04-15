const {categories} = require("./categories");
const {product} = require("./product");
const {productById} = require("./productById");
const {getProductByCategoryName} = require("./productByCategoryName");
const {getAllCategories}= require("./categories");
const {productCategory} = require("./productCategory");
const {getProductByName } = require("./getProductByProductName")
const {getProductByArray} = require("./getProductByArray")
const { getAllUsers } = require("./getAllUsers")
const {validateUser} = require("./validateUser")
const {getOrderById} = require("./getOrderById")
const {getAllOrders} = require("./getAllOrders")
const {getOrdersByUserId} = require("./getOrdersByUserId")

// getProductByCategoryName
module.exports = {
  categories, 
  product, 
  productById , 
  getProductByCategoryName, 
  getAllCategories,
  productCategory, 
  getProductByName, 
  getProductByArray,
  getAllUsers, 
  validateUser,
  getOrderById,
  getAllOrders,
  getOrdersByUserId,
}
