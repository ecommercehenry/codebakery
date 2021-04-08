const { addCategoryToProduct } = require("../../../services/productsService");

module.exports = {
    addCategoryToProduct: async (idProduct,idCategory) =>{
        return await addCategoryToProduct(idProduct,idCategory)        
    }
}