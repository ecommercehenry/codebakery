module.exports = `
    type order{
        id: Int!,
        status: String!,
        userId: Int!,
        creation: String!,
        lastModified: String!,
        cancelled: Boolean!
        lineal_order: [lineal_order], 
        name: String!,
        email: String!,
        role: String!,
        storeId: Int
    }
`;
