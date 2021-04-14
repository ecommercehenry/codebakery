// console.log('queires') 
module.exports = `
    union resultValidate = user | error

    type Query{
        product: [product],
        productById(id :Int!): product,
        productCategory(id: Int!): product
        getProductByCategoryName(name: String!): [product],
        getAllCategories:[category],
        getProductByName(name: String!): product, 
        getProductByArray(array: [Int!]): [product]
        validateUser(name:String, password:String): resultValidate
    }
`