console.log('queires')
module.exports = `
    type Query{
        product: [product],
        productById(id :Int!): product,
        getProductByCategoryName(name: String!): [product],
        getAllCategories:[category],
    }
`