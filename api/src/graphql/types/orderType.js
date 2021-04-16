module.exports = `
    type order{
        id: Int!,
        status: String!,
        userId: Int!,
        creation: String!,
        lastModified: String!
        lineal_order: [lineal_order]
    }
`