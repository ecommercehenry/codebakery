const speakeasy = require("speakeasy")
const qrcode = require("qrcode")
const { Users } = require("../db");

async function generateTokenOTP(idUser){
    //Generacion y guardado del token
    try{
        const user = await Users.findOne({
            where:{
                id:idUser
            }
        })
        var secret = speakeasy.generateSecret({ length: 20 });
        user.secretOtp = secret.base32
        user.save()
    }catch(err){
        return {__typename:"error",name:"Error al guardar token",detail:err.message}
    }

    //Envio del token formateado
    let url = `otpauth://totp/juancho?secret=${secret.base32}`
    return _generateQRCode(url)
    .then(res=>{
        return {__typename:"otpToken", image:res}
    })
    .catch(err=>{
        return {__typename:"error",name:"Error al generar imagen del token",detail:"Error grave!!!!, se esta guardando el token en la db pero no se esta retornando :("}
    })
}

 async function _generateQRCode (url) {

    try{
        return await qrcode.toDataURL(url)
    }
    catch(err){
        return null
    }
}

async function validateTOTP(idUser, code){
    //Obtener el usuario
    let user = null
    console.log("validateTOTP", idUser, code)
    try{
        user = await Users.findOne({
            where:{
                id:idUser
            }
        })

    }catch(err){
        return {__typename:"error", name:"Error al obtener un usuario", detail:`El usuario ${idUser} no existe`}
    }
    console.log(code, 'aaaaaaaaaaaaaa', user)
    let valid = speakeasy.totp.verify({
        secret:user.secretOtp,
        encoding:"base32",
        token: code
    })
    if(valid){
        return {__typename:"booleanResponse", boolean:true}
    }else{
        return {__typename:"error", name:"Token no valido", detail:"El token enviado no es valido (lo mas posible es que haya expirado, intenta de nuevo"}
    }
}

module.exports = { generateTokenOTP, validateTOTP }