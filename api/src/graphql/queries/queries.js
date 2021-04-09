module.exports = `
    type Query{
        product: [product],
        productById(id :Int!): product
        productCategory(id: Int!): product
    }

`