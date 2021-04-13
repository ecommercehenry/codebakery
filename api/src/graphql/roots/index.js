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
    modifyUser
} = require("./mutationsResolver/")
const {
    getAllCategories,
    product, 
    productById,
    getProductByCategoryName,
    productCategory, 
    getProductByName,
    getProductByArray,
    validateUser
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
    //Queries
    
    productById,
    product,
    productCategory,
    getAllCategories,
    getProductByName,
    getProductByCategoryName,
    getProductByArray,
    validateUser
    
}

module.exports = root
