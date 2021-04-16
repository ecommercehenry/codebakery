const categoryInput = require("./categoryInput");
const dataProductsOrderInput = require("./dataProductsOrderInput");
const productInput = require("./productInput");

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

`