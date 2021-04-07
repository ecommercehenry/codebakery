const { modifyProduct } = require("../../../services/productsService")


// getAllProducts
module.exports = {modifyProduct:(id,dataToModify)=>{
    console.log("WEfew")
    return modifyProduct(id,dataToModify)
}}