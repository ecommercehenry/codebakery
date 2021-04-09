const {updateCategory, 
    modifyProduct, 
    addCategory, 
    deleteCategory, 
    addCategoryToProduct, 
    removeCategoryFromProduct,
    deleteById,
    addProduct
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
    addProduct,

    //Queries
    categories,
    productById,
    product,
    
}

module.exports = root