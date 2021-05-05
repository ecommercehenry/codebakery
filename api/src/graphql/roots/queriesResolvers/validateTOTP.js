const { validateTOTP } = require("../../../services/authService");

module.exports = {
  validateTOTP: async ({ userId, code }) => {
    const salida = await validateTOTP(userId, code);
    return salida;
  },
};
