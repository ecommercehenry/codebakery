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
    getAllCategories,
    product, 
    productById,
    getProductByCategoryName,
    productCategory
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
    productCategory,
    getAllCategories,
    
}

module.exports = root