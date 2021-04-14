module.exports = `
union resultAddCategory = category | error
union resultProduct = product | error
union resultUpdateCategory = Int | error
union resultDeletes = Boolean | error
union resultUsers = user | error

type Mutation{
    modifyProduct(id: Int!, dataToModify: productInput!): resultProduct
    updateCategory(id : Int!, input: categoryInput): resultUpdateCategory
    addCategory(name: String!): resultAddCategory
    deleteCategory(id: Int!): resultDeletes
    deleteById(id: Int!): resultDeletes
    addCategoryToProduct(idProduct: Int!,idCategory: Int!): resultProduct
    removeCategoryFromProduct(idProduct: Int!,idCategory: Int!): resultProduct
    addProduct(category: String!, name: String!, description: String!, price: Float!, stock: Int!, image: String!): resultProduct
    createUser(name: String!, password: String!, email: String!, role: String!): resultUsers
    modifyUser(id: Int!, name:String, password: String, email: String, role: String): resultUsers
}`
