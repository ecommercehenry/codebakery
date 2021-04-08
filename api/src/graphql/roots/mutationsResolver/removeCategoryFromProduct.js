const { removeCategoryFromProduct } = require("../../../services/productsService");

module.exports = {
    removeCategoryFromProduct: async (idProduct,idCategory) =>{
        return await removeCategoryFromProduct(idProduct,idCategory)        
    }
}