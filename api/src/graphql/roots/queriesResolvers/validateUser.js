const { loginUser } = require("../../../services/userService")

// getAllProducts
module.exports = {
  validateUser: async ({ email, password }) => {
    const salida = await loginUser(email, password)
    console.log(salida)
    return salida
  },
}
