const { getAllOrders } = require("../../../services/productsService")


// getAllProducts
module.exports = {getAllOrders:() => {
    console.log("----------------------------FUNCIONA!")
    return getAllOrders()
}}