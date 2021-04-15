

module.exports = `
type Mutation{
    modifyProduct(id: Int!, dataToModify: productInput!): product
    updateCategory(id : Int!, input: categoryInput): Int
    addCategory(name: String!): category
    deleteCategory(id: Int!): Boolean
    deleteById(id: Int!): Boolean
    addCategoryToProduct(idProduct: Int!,idCategory: Int!): product
    removeCategoryFromProduct(idProduct: Int!,idCategory: Int!): product
    addProduct(category: String!, name: String!, description: String!, price: Float!, stock: Int!, image: String!): product
    createUser(name: String!, password: String!, email: String!, role: String!): user
    modifyUser(id: Int!, name:String, password: String, email: String, role: String): user
    createOrder(idUser: Int!, dataProducts: [dataProductsOrderInput]) : order
    updateOrderPrices(orderId: Int!) : Boolean
    deleteProductOrder(orderId: Int!, productId: Int!): Boolean
    addProductToOrder(orderId: Int!, productId: Int!, quantity: Int!): Boolean
    deleteOrder(orderId: Int!) : Boolean
    updateOrderToTicket(orderId: Int!): Boolean
    modifyStatusOrder(orderId: Int!, status: String!): Boolean
}`