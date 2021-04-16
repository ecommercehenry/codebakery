module.exports = `
    type order{
        id: Int!,
        status: String!,
        lineal_order: [lineal_order]
    }
`