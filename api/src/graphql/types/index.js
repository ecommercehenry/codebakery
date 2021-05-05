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
const promoType = require("./promoType")
const storeType = require("./storeType")
const otpToken = require("./otpToken")
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
    ${otpToken}
    ${promoType}
    ${storeType}
`
