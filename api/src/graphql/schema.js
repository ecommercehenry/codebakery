const {buildSchema} = require('graphql');
const {getAllProducts} = require("../services/productsService")
const {modifyProduct} = require("../services/productsService")

const root = {
    product:()=>{
        console.log("----------------------------weufhwiufhiuwefhiw")
        return getAllProducts()
    },
    modifyProduct:(id,dataToModify)=>{
        return modifyProduct(id,dataToModify)
    }
}

const schema = buildSchema(`
#Queryes ( to get data )
type Query{
    product: [product]
}

#Mutations ( to manipulate data )
type Mutation{
    modifyProduct(id: Int, dataToModify: inputProduct!): product
}

#Inputs
input inputProduct{
    description: String,
    price: Int,
    stock: Int,
    image: String,
}

#Object product
type product{
    id : Int!
    name : String!,
    description: String!,
    price: Int!,
    stock: Int!,
    image: String!,
}`)



module.exports= {schema, root}