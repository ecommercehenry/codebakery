const {buildSchema} = require('graphql');
const {getAllProducts} = require("../services/productsService")
const root = {
    product:()=>{
        console.log("----------------------------weufhwiufhiuwefhiw")
        return getAllProducts()
    }
}

const schema = buildSchema(`#La Query raiz
type Query{
    product: [product]
}
type product{
    id : Int
    name : String
}`)

module.exports= {schema, root}