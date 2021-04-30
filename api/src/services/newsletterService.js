var nodemailer = require('nodemailer');
const { Users } = require("../db");

async function sendNewsletter(){

    try{
        users = await Users.findAll({ where: { newsletter:true } });

    }catch(err){
        return {__typename:"error",name:"Unknow", detail:`Unknow error ocurred: ${err.message}`}
    }

}

module.exports = {
	sendNewsletter,
   
};