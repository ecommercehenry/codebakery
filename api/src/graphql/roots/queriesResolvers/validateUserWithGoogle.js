const { loginUserWithGoogle } = require("../../../services/userService");

// getAllProducts
module.exports = {
    validateUserWithGoogle: async ({email,tokenId}) =>  {
        console.log('validando.....')
    const salida = await loginUserWithGoogle(email,tokenId)
    console.log(salida)
    return salida
}}