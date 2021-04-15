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
    updateOrderPrices
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
    getOrdersByUserIdInTicket
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
    getOrderById,
    getAllOrders,
    getOrdersByUserIdInCart,
    getOrdersByUserIdInTicket,
}

module.exports = root
