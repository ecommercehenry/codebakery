const { categories } = require("./categories")
const { product } = require("./product")
const { productById } = require("./productById")
const { getProductByCategoryName } = require("./productByCategoryName")
const { getAllCategories } = require("./categories")
const { productCategory } = require("./productCategory")
const { getProductByName } = require("./getProductByProductName")
const { getProductByArray } = require("./getProductByArray")
const { getAllUsers } = require("./getAllUsers")
const { validateUser } = require("./validateUser")
const { getOrderById } = require("./getOrderById")
const { getAllOrders } = require("./getAllOrders")
const { getOrdersByUserIdInCart } = require("./getOrdersByUserIdInCart")
const { getOrdersByUserIdInTicket } = require("./getOrdersByUserIdInTicket")
const { getUserByEmail } = require("./getUserByEmail")
const { validateCredentials } = require("./validateCredentials")
const { getAllReviewsFromAProduct } = require("./getAllReviewsFromAProduct")
const { getUserById} = require("./getUserById")
const {validateUserWithGoogle} = require("./validateUserWithGoogle");
const { getReviewByUserId } = require("./getReviewByUserId");
const { getPromos } = require("./getPromos");
const {getAllStores} = require("./getAllStores")
const {getByStore} = require("./getByStore")
const {getAllOrdersUser} = require("./getAllOrdersUser")





module.exports = {
  categories,
  product,
  productById,
  getProductByCategoryName,
  getAllCategories,
  productCategory,
  getProductByName,
  getProductByArray,
  getAllUsers,
  validateUser,
  validateCredentials,
  getOrderById,
  getAllOrders,
  getOrdersByUserIdInCart,
  getOrdersByUserIdInTicket,
  getUserByEmail,
  getAllReviewsFromAProduct,
  getUserById,
  validateUserWithGoogle,
  getReviewByUserId,
  getPromos,
  getAllStores, 
  getByStore,
  getAllOrdersUser
}
