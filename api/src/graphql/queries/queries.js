module.exports = `
    union resultValidate = user | error
    union ordersResult = orders | error
    union orderResult = order | error
    type Query{
        product: [product],
        productById(id :Int!): product,
        productCategory(id: Int!): product,
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
        getAllReviewsFromAProduct(productId: Int!): [review]
        getUserById(id: Int!) : user,
        validateCredentials(token: String!, role: String!): Boolean,
        validateUserWithGoogle(email: String!, tokenId: String): resultValidate
        getReviewByUserId(userId: Int!) : [review]
        validateTOTP(userId:Int!, code:String!) : resultBoolean
        getAllStores: [store]
        
        getImageSlider: [image]
        getByStore(id: Int!) : store
        getPromos: [promo]
        getAllOrdersUser (userId: Int!): ordersResult

    }
`;
