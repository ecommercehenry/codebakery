const categoryInput = require("./categoryInput");
const dataProductsOrderInput = require("./dataProductsOrderInput");
const productInput = require("./productInput");
const reviewInput = require("./reviewInput");

// aqui exportas tu input
module.exports = `
    ${
        categoryInput
    }
    ${
        productInput
    }
    ${
        dataProductsOrderInput
    }
    ${
        reviewInput
    }

`