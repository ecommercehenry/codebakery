const { deleteCategory } = require("../../../services/categoryService")


// getAllProducts
module.exports = {deleteCategory:(id)=>{
    return deleteCategory(id)
}}