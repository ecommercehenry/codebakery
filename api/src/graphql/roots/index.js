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
    getOrdersByUserId,
    getUserByEmail,
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
    getOrdersByUserId,
    getUserByEmail
}

module.exports = root
