const { getAllCategory } = require("../../services/categories")
const { getAllProducts, modifyProduct, getProductById } = require("../../services/productsService")
const { updateCategory } = require("../../services/updateCategory")
const {product} = require("./queriesResolvers/product")
// product
const root = {
    product,
    modifyProduct:(id,dataToModify)=>{
        return modifyProduct(id,dataToModify)
    },
    categories:() => {
        return getAllCategory();
    },
    updateCategory: async (args) => {
        let {name, description} = args.input;
        let num = await updateCategory(args.id , name, description);
        return num[0];
    },
    productById: (id) => {
        return getProductById(id)
    }
}

module.exports = root