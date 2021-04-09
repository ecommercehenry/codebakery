const { deleteById } = require("../../../services/productsService")


// getAllProducts
module.exports = {deleteById: (id) =>{
    return deleteById(id)
}}