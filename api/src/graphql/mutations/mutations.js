module.exports = `
union resultCategory = category | error
union resultProduct = product | error
union deletes = booleanResponse | error    
union resultUsers = user | error
union resultBoolean  = booleanResponse | error 
union resultOrder = order | error
union reviewResult = review | error
union emailResponse = email | error
type Mutation{
    modifyProduct(id: Int!, dataToModify: productInput!): resultProduct
    updateCategory(id : Int!, input: categoryInput): resultCategory
    addCategory(name: String!): resultCategory
    deleteCategory(id: Int!): deletes
    deleteById(id: Int!): deletes
    addCategoryToProduct(idProduct: Int!,idCategory: Int!): resultProduct
    removeCategoryFromProduct(idProduct: Int!,idCategory: Int!): resultProduct
    addProduct(category: String!, name: String!, description: String!, price: Float!, stock: Int!, image: String!): resultProduct
    createUser(name: String!, password: String!, email: String!, role: String!, google: Boolean): resultUsers
    

    modifyUser(id: Int, name:String, password: String, newPassword: String, email: String, role: String, address: String, dni: String, phoneNumber: String, newsletter: Boolean): resultUsers
    

    createOrder(idUser: Int!, dataProducts: [dataProductsOrderInput]) : resultOrder
    updateOrderPrices(orderId: Int!) : resultBoolean
    deleteProductOrder(orderId: Int!, productId: Int!): resultBoolean
    addProductToOrder(orderId: Int!, productId: Int!, quantity: Int!, userId: Int): resultBoolean
    deleteOrder(orderId: Int!) : resultBoolean
    updateOrderToTicket(orderId: Int!): resultBoolean
    modifyOrderStatus(orderId: Int!, status: String!): resultBoolean
    incrementQuantity(orderId: Int!, productId: Int!, quantity: Int!): resultBoolean
    decrementQuantity(orderId: Int!, productId: Int!, quantity: Int!): resultBoolean
    addReview(productId: Int!, userId: Int!, dataReview: reviewInput!): reviewResult
    modifyReview(reviewId: Int!, dataReview:reviewInput!): reviewResult
    deleteReview(productId: Int!, userId: Int!): deletes
    deleteUser(userId: Int!) : resultBoolean
    sendEmail(userId: Int!, affair: String!, message: String!): emailResponse

    sendNewsletter(message: String!, image:String!) : emailResponse 
    addPromo(name: String!, discount: Int!, category: String!, day: String!): resultBoolean
    applyDiscount(discount: Int!, category: String!): resultBoolean
    deletePromo(id: Int!): resultBoolean
    resetDiscount: resultBoolean
    resetPassword(userId: Int!): resultUsers
    addStore(name: String!, lat: Float!, long: Float!, address: String!, phoneNumber: String): store,
    modifyStore(id: Int!, name: String!, lat: Float!, long: Float!, address: String!, phoneNumber: String): store,
    deleteStore(id:Int):resultBoolean
    modifyOrderStore(idStore: Int!, idOrder: Int!): resultBoolean
    saveImageSlider(image: String!): resultBoolean
    deleteImageById(imageId: Int!) : resultBoolean
}`;
