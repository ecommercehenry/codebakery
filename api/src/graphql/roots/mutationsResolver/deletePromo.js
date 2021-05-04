const { deletePromo } = require("../../../services/promoService")
const jwt = require("jsonwebtoken")

module.exports = {
    deletePromo: (args) => {
        return deletePromo(args)
    },
}