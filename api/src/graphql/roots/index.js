const {updateCategory, modifyProduct, addCategory} = require("./mutationsResolver/")
const {categories, product, productById } = require("./queriesResolvers/")



// product
const root = {
    //Mutations
    modifyProduct,
    updateCategory,
    addCategory, 

    //Queries
    categories,
    productById,
    product,
    
}

module.exports = root