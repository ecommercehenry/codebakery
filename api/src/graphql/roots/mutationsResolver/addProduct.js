const { addProduct } = require("../../../services/productsService");
const jwt = require('jsonwebtoken');

// getAllProducts
module.exports = {
    addProduct: ({ category, name, description, price, stock, image}, args)=>{
    try{
        const authToken = args.headers.authtoken;
        const decoded = jwt.verify(authToken, "secret");
        let {authrole} = args.headers
            if(authrole === 'admin'){
                let newProduct = addProduct({category, name, description, price, stock, image});
                return newProduct;
            }
            else return {__typename: 'error', name:"error", detail: 'No admin'};
    }catch{
        return {__typename: 'error', name:"error", detail: 'No admin'};
    }
}}