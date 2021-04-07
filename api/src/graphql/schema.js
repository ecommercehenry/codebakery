const { buildSchema } = require("graphql")
const { getAllProducts, modifyProduct } = require("../services/productsService")
const { deleteCategory } = require("../services/categoryService")


const root = {
  product: () => {
    console.log("----------------------------weufhwiufhiuwefhiw")
    return getAllProducts()
  },
  modifyProduct: (id, dataToModify) => {
    return modifyProduct(id, dataToModify)
  },
  deleteCategory: (args) => {
    // console.log(deleteCategory(args))
    return deleteCategory(args)
  },
}

const schema = buildSchema(`
#Queryes ( to get data )
type Query{
    product: [product]
}

#Mutations ( to manipulate data )
type Mutation{
    modifyProduct(id: Int, dataToModify: inputProduct!): product
    deleteCategory(id: Int!): Boolean
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

module.exports = { schema, root }
