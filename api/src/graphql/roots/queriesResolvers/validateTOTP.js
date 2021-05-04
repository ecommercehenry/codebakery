const { validateTOTP } = require("../../../services/authService");

// getAllProducts
module.exports = {
    validateTOTP: async ({ userId, code }) => {
    const salida = await validateTOTP(userId, code)
    return salida
  },
}
