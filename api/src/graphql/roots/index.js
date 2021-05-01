const {
  updateCategory,
  modifyProduct,
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
  modifyOrderStatus,
  incrementQuantity,
  decrementQuantity,
  deleteReview,
  addReview,
  modifyReview,
  deleteUser,
  sendEmail,
  saveImageSlider,
  deleteImageById,
} = require("./mutationsResolver/");

const {
  getAllCategories,
  product,
  productById,
  getProductByCategoryName,
  productCategory,
  getProductByName,
  getAllUsers,
  getProductByArray,
  validateUser,
  getOrderById,
  getAllOrders,
  getOrdersByUserIdInCart,
  getOrdersByUserIdInTicket,
  getUserByEmail,
  getAllReviewsFromAProduct,
  getUserById,
  validateCredentials,
  validateUserWithGoogle,
  getReviewByUserId,
  getImageSlider,
} = require("./queriesResolvers/");

// product
const root = {
  //Mutations
  modifyProduct,
  updateCategory,
  addCategory,
  deleteCategory,
  deleteById,
  addCategoryToProduct,
  removeCategoryFromProduct,
  addProduct,
  createUser,
  modifyUser,
  createOrder,
  updateOrderPrices,
  addProductToOrder,
  deleteOrder,
  updateOrderToTicket,
  incrementQuantity,
  decrementQuantity,
  deleteReview,
  addReview,
  modifyReview,
  sendEmail,
  deleteUser,
  saveImageSlider,
  deleteImageById,

  //Queries
  productById,
  product,
  productCategory,
  getAllCategories,
  getProductByName,
  getProductByCategoryName,
  getProductByArray,
  getAllUsers,
  validateUser,
  validateCredentials,
  getOrderById,
  getAllOrders,
  getOrdersByUserIdInCart,
  getOrdersByUserIdInTicket,
  deleteProductOrder,
  modifyOrderStatus,
  validateUser,
  getUserByEmail,
  getAllReviewsFromAProduct,
  getUserById,
  getAllReviewsFromAProduct,
  validateUserWithGoogle,
  getReviewByUserId,
  getImageSlider,
  // getAllUsers,
};

module.exports = root;
