

module.exports = `
type Mutation{
    modifyProduct(id: Int, dataToModify: productInput!): product
    updateCategory(id : Int!, input: categoryInput): Int
    addCategory(name: String!, description: String!) : category 
    deleteCategory(id: Int!): Boolean
    deleteById(id: Int!): Boolean
    addCategoryToProduct(idProduct: Int!,idCategory: Int!): product
    removeCategoryFromProduct(idProduct: Int!,idCategory: Int!): product
}`