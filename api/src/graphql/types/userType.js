module.exports = `
    type user {
        id : Int!
        name : String!
        email: String!
        role: String!
        address: String!
        dni: Float!
        phoneNumber: Float!
        products: [product]
        reviews: [review]
        token: String
        order: order 
    }

`;
