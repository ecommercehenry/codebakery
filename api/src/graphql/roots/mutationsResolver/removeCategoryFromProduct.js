const { removeCategoryFromProduct } = require("../../../services/productsService");
const jwt = require('jsonwebtoken');

module.exports = {
    removeCategoryFromProduct: async ({idProduct,idCategory}, args) =>{
        try{
            const authToken = args.headers.authtoken;
            const decoded = jwt.verify(authToken, "secret");
            let {authrole} = args.headers
            if(authrole === 'admin'){
                return await removeCategoryFromProduct(idProduct,idCategory);
            }
            else return {__typename: 'error', name:"error", detail: 'No admin'};
        }catch{
            return {__typename: 'error', name:"error", detail: 'No admin'};
        }
    }
}