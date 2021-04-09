const {updateCategory, modifyProduct, addCategory, deleteCategory, addCategoryToProduct, removeCategoryFromProduct,deleteById} = require("./mutationsResolver/")
const {categories, product, productById, getAllCategories} = require("./queriesResolvers/")



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

    //Queries
    categories,
    productById,
    product,
    getAllCategories,
    
}

module.exports = root