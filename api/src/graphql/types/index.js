
const categoryType = require("./categoryType")
const productType = require("./productType")
const userType = require("./userType")
const reviewType = require("./reviewType")
const errorType = require("./errorType")
const orderType = require("./orderType")
const linealOrderType = require("./linealOrderType")
const booleanType = require("./booleanType")
const ordersType = require("./ordersType")
const emailType = require("./emailType")
const storeType = require("./storeType")

const image = require("./imageType");

// aqui exportas tu type
module.exports = `
    ${categoryType}
    ${productType}
    ${userType}
    ${reviewType}
    ${errorType}
    ${orderType}
    ${linealOrderType}
    ${booleanType}
    ${ordersType}
    ${emailType}

    ${storeType}
    ${image}
`

