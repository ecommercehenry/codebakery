module.exports = `
    input productInput{
        name: String
        description: String,
        price: Float,
        discount: Int!,
        stock: Int,
        image: String,
        categories: [String]
    }
`