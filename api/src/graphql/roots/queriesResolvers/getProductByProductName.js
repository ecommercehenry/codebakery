const { getProductByName } = require("../../../services/productsService")
console.log('rootqueries')
module.exports={getProductByName: (name) =>{
    console.log("My Queries***")
    return getProductByName(name)
}}