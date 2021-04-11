const categoryType = require("./categoryType")
const productType = require("./productType")
const userType = require("./userType")

// aqui exportas tu type
module.exports = `
    ${categoryType}
    ${productType}
    ${userType}
`
