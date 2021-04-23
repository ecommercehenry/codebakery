const { getProductById } = require("../../../services/productsService")

module.exports={productById: (id) =>{
    
    return getProductById(id)
}}