module.exports = `
type lineal_order {
    userId: Int!,
    price: Float!,
    quantity: Int!
    product:[product]
}
`