const { loginUser } = require("../../../services/userService")

// getAllProducts
module.exports = {validateUser:async ({name,password}) =>  {
    const salida = await loginUser(name,password)
    console.log(salida)
    return salida
}}