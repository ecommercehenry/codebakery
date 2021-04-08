const { addCategory } = require("../../../services/categories")


// getAllProducts
module.exports = {addCategory:(name,description)=>{
    console.log("Creo")
    return addCategory(name,description)
}}