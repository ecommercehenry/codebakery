module.exports = `
    type Query{
        product: [product],
        productById(id :Int!): product
    }

`