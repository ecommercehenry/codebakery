const { loginUserWithGoogle } = require("../../../services/userService");

// getAllProducts
module.exports = {
    validateUserWithGoogle: async ({email,tokenId}) =>  {
        
    const salida = await loginUserWithGoogle(email,tokenId)
    
    return salida
}}