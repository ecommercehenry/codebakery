const {updateCategory, modifyProduct, addCategory, deleteCategory, addCategoryToProduct, removeCategoryFromProduct,deleteById, addProduct} = require("./mutationsResolver/")
const {categories, product, productById, productCategory } = require("./queriesResolvers/")



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

    //Queries
    categories,
    productById,
    product,
    productCategory,
    
}

module.exports = root