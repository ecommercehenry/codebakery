module.exports = `
    union resultValidate = user | error
    union ordersResult = orders | error
    union orderResult = order | error

    type Query{
        product: [product],
        productById(id :Int!): product,
        productCategory(id: Int!): product
        getProductByCategoryName(name: String!): [product],
        getAllCategories:[category],
        getProductByName(name: String!): product, 
        getAllUsers: [user],    
        getProductByArray(array: [Int!]): [product],
        getAllOrders: ordersResult,
        getOrdersByUserIdInCart(userId: Int!): ordersResult,
        getOrdersByUserIdInTicket(userId: Int!): ordersResult,
        validateUser(email:String, password:String): resultValidate,
        getOrderById(id: Int!): orderResult,
        validateCredentials(token: String!, role: String!): Boolean
        getAllReviewsFromAProduct(productId: Int!): [review]
    }
`