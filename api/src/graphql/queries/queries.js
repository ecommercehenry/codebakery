console.log('queires')
module.exports = `
    type Query{
        product: [product],
        productById(id :Int!): product,
        productCategory(id: Int!): product
        getProductByCategoryName(name: String!): [product],
        getAllCategories:[category],
        getProductByName(name: String!): product, 
        getProductByArray(array: [Int!]): [product],
        getAllOrders: [order],
        getOrdersByUserId(userId: Int!): [order]
    }
`