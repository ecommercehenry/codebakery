const { applyDiscount } = require("../../../services/promoService")
const jwt = require("jsonwebtoken")

module.exports = {
    applyDiscount: (args) => {
        return applyDiscount(args)
    },
}