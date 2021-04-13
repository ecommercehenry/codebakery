const { getProductByArray } = require("../../../services/productsService")

module.exports={getProductByArray: (props) =>{
    console.log("it works")
    return getProductByArray(props)
}}