const {buildSchema} = require('graphql');
const {getAllProducts} = require("../services/productsService")
const {modifyProduct} = require("../services/productsService")

const root = {
    product:()=>{
        console.log("----------------------------weufhwiufhiuwefhiw")
        return getAllProducts()
    },
    modifyProduct:(id,dataToModify)=>{
        return modifyProduct({id,dataToModify})
    }
}

const schema = buildSchema(`#La Query raiz
type Query{
    product: [product]
}
type Mutation{
    modifyProduct(id: Int): product
}
input inputProduct{
    description: String,
    price: String,
    stock: Int,
    image: String,
}
type product{
    id : Int
    name : String
}`)



module.exports= {schema, root}