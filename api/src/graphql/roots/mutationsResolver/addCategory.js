const { addCategory } = require("../../../services/categories")


// getAllProducts
module.exports = {addCategory:(name,description)=>{
    return addCategory(name,description)
}}