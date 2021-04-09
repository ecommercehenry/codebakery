const {updateCategory, 
    modifyProduct, 
    addCategory, 
    deleteCategory, 
    addCategoryToProduct, 
    removeCategoryFromProduct,
    deleteById,
    addProduct,
} = require("./mutationsResolver/")
const {
    getAllCategories,
    product, 
    productById,
    getProductByCategoryName
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
    getProductByCategoryName,
    addProduct,

    //Queries
    
    productById,
    product,
    getAllCategories,
    
}

module.exports = root