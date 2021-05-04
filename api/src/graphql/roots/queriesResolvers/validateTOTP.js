const { validateTOTP } = require("../../../services/authService");

module.exports = {
  validateTOTP: async ({ userId, code }) => {
    console.log("validate", userId, code);
    const salida = await validateTOTP(userId, code);
    console.log("salidad", salida)
    return salida;
  },
};
