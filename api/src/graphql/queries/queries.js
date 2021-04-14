module.exports = `
    union resultValidate = user | error

    type Query{
        product: [product],
        productById(id :Int!): product,
        productCategory(id: Int!): product
        getProductByCategoryName(name: String!): [product],
        getAllCategories:[category],
        getProductByName(name: String!): product, 
        getAllUsers: [user],
        getProductByArray(array: [Int!]): [product]
        validateUser(name:String, password:String): resultValidate
    }
`