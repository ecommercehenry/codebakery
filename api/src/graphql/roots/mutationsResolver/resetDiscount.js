const { resetDiscount } = require("../../../services/promoService")
const jwt = require("jsonwebtoken")

module.exports = {
    resetDiscount: () => {
        return resetDiscount()
    },
}