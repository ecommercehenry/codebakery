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
    modifyStatusOrder, 
    incrementQuantity, 
    decrementQuantity, 
} = require("./mutationsResolver/")

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
    validateCredentials,
} = require("./queriesResolvers/")

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
    modifyStatusOrder,
    validateUser
}

module.exports = root
