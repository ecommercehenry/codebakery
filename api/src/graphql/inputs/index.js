const categoryInput = require("./categoryInput");
const dataProductsOrderInput = require("./dataProductsOrderInput");
const productInput = require("./productInput");
const reviewInput = require("./reviewInput");
const storeInput = require("./storeInput");
const promoInput = require("./promoInput");
const emailNewsletter= require("./emailNewsletter")

// aqui exportas tu input
module.exports = `
    ${categoryInput}
    ${productInput}
    ${dataProductsOrderInput}
    ${reviewInput}
    ${storeInput}
    ${promoInput}
    ${emailNewsletter}
`;
