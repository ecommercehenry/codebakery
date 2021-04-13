const { addCategory } = require("../../../services/categories")


// getAllProducts
module.exports = {addCategory:(name, authToken)=>{
    return addCategory(name, authToken)
}}