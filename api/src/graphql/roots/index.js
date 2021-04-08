const {updateCategory, modifyProduct, addCategory, deleteCategory, addCategoryToProduct, removeCategoryFromProduct} = require("./mutationsResolver/")
const {categories, product, productById } = require("./queriesResolvers/")



// product
const root = {
    //Mutations
    modifyProduct,
    updateCategory,
    addCategory, 
    deleteCategory,
    addCategoryToProduct,
    removeCategoryFromProduct,

    //Queries
    categories,
    productById,
    product,
    
}

module.exports = root