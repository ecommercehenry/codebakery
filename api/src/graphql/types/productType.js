module.exports = `
    type product{
        id : Int!
        name : String!,
        description: String!,
        discount: Int,
        price: Float!,
        stock: Int!,
        image: String!,
        categories: [category],
        quantity: Int
        reviews: [review]
    }

`