const {updateCategory, 
    modifyProduct, 
    addCategory, 
    deleteCategory, 
    addCategoryToProduct, 
    removeCategoryFromProduct,
    deleteById
} = require("./mutationsResolver/")
const {
    categories, 
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

    //Queries
    categories,
    productById,
    product,
    
}

module.exports = root