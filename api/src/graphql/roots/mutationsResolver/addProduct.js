const { addProduct } = require("../../../services/productsService")


// getAllProducts
module.exports = {addProduct:(args)=>{
    return addProduct(args)
}}