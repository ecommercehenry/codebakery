module.exports = `
    type user {
        id : Int!
        name : String!,
        email: String!,
        role: String!,
        products: [product],
        reviews: [review]
    }

`