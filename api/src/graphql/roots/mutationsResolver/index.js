const { modifyProduct } = require("./modifyProduct");
const { updateCategory } = require("./updateCategory");
const { addCategory } = require("./addCategory");
const { deleteCategory } = require("./deleteCategory");
const { addCategoryToProduct } = require("./addCategoryToProduct");
const { removeCategoryFromProduct } = require("./removeCategoryFromProduct");
const { deleteById } = require("./deleteById");
const { addProduct } = require("./addProduct");
const { createUser } = require("./createUser");
const { modifyUser } = require("./modifyUser");
const {createOrder } = require("./createOrder");
const {updateOrderPrices} = require("./updateOrderPrices");
const { deleteProductOrder } = require("./deleteProductOrder");
const {addProductToOrder} = require("./addProductToOrder")
const {deleteOrder} = require("./deleteOrder")
const {updateOrderToTicket} = require("./updateOrderToTicket")
const {modifyStatusOrder} = require("./modifyStatusOrder")
module.exports = {
  modifyProduct,
  updateCategory,
  addCategory,
  deleteCategory,
  addCategoryToProduct,
  removeCategoryFromProduct,
  deleteById,
  addProduct,
  createUser,
  modifyUser,
  createOrder,
  updateOrderPrices,
  deleteProductOrder,
  addProductToOrder,
  deleteOrder,
  updateOrderToTicket,
  modifyStatusOrder
}
