const { productCategory } = require("../../../services/productsService")


// getAllProducts
module.exports = {productCategory:({id}) => {
    return productCategory({id})
}}