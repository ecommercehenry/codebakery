const { modifyProduct } = require("../../../services/productsService")


// getAllProducts
module.exports = {modifyProduct:(id,dataToModify)=>{
    return modifyProduct(id,dataToModify)
}}