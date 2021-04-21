module.exports = `
union resultCategory = category | error
union resultProduct = product | error
union deletes = booleanResponse | error    
union resultUsers = user | error
union resultBoolean  = booleanResponse | error 
union resultOrder = order | error
 
type Mutation{
    modifyProduct(id: Int!, dataToModify: productInput!): resultProduct
    updateCategory(id : Int!, input: categoryInput): resultCategory
    addCategory(name: String!): resultCategory
    deleteCategory(id: Int!): deletes
    deleteById(id: Int!): deletes
    addCategoryToProduct(idProduct: Int!,idCategory: Int!): resultProduct
    removeCategoryFromProduct(idProduct: Int!,idCategory: Int!): resultProduct
    addProduct(category: String!, name: String!, description: String!, price: Float!, stock: Int!, image: String!): resultProduct
    createUser(name: String!, password: String!, email: String!, role: String!): resultUsers
    modifyUser(id: Int!, name:String, password: String, newPassword: String, email: String, role: String, address: String, dni: Float, phoneNumber: Float): resultUsers
    createOrder(idUser: Int!, dataProducts: [dataProductsOrderInput]) : resultOrder
    updateOrderPrices(orderId: Int!) : resultBoolean
    deleteProductOrder(orderId: Int!, productId: Int!): resultBoolean
    addProductToOrder(orderId: Int!, productId: Int!, quantity: Int!): resultBoolean
    deleteOrder(orderId: Int!) : resultBoolean
    updateOrderToTicket(orderId: Int!): resultBoolean
    modifyOrderStatus(orderId: Int!, status: String!): resultBoolean
    incrementQuantity(orderId: Int!, productId: Int!, quantity: Int!): resultBoolean
    decrementQuantity(orderId: Int!, productId: Int!, quantity: Int!): resultBoolean
    deleteUser(userId: Int!) : resultBoolean

   
}`
