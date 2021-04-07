const {updateCategory, modifyProduct} = require("./mutationsResolver/")
const {categories, product, productById} = require("./queriesResolvers/")


// product
const root = {
    //Mutations
    modifyProduct,
    updateCategory,
    //Queries
    categories,
    productById,
    product,
}

module.exports = root