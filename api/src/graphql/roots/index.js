const {updateCategory, modifyProduct, addCategory, deleteCategory} = require("./mutationsResolver/")
const {categories, product, productById } = require("./queriesResolvers/")



// product
const root = {
    //Mutations
    modifyProduct,
    updateCategory,
    addCategory, 
    deleteCategory,

    //Queries
    categories,
    productById,
    product,
    
}

module.exports = root