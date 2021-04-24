const { getAllProducts } = require("../../../services/productsService")


// getAllProducts
module.exports = {product:() => {
    
    return getAllProducts()
}}