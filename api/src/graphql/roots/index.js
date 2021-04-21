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
    deleteUser,
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
    getUserByEmail,
    
    // getAllUsers,
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
    deleteUser,
  
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
    getUserByEmail
    
    // getAllUsers,
    
}

module.exports = root
