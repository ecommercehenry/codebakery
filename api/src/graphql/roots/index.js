const {updateCategory, modifyProduct, addCategory, deleteCategory, deleteById} = require("./mutationsResolver/")
const {categories, product, productById } = require("./queriesResolvers/")



// product
const root = {
    //Mutations
    modifyProduct,
    updateCategory,
    addCategory, 
    deleteCategory,
    deleteById,
    //Queries
    categories,
    productById,
    product,
    
}

module.exports = root