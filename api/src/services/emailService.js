var nodemailer = require('nodemailer');
const { Users } = require("../db");

async function sendEmail(idUser, affair, message) {

    //Validate data
    if(!affair) return {__typename:"error",name:"Not affair sent", detail:`No affair of the email has been sent`} 
    if(!message) return {__typename:"error",name:"Not message sent", detail:`No message of the email has been sent`} 

    //Validate the email of the user exists
    let user = null
    try{
        user = await Users.findOne({ where: { id:idUser } });
    }catch(err){
        return {__typename:"error",name:"Unknow", detail:`Unknow error ocurred when find user: ${err.message}`}
    }
    if(!user) return {__typename:"error",name:"Id not exists", detail:`The user with id ${idUser} not exists`}
    if(!user.email) return {__typename:"error",name:"User dont have email", detail:`The user with id ${idUser} not have a registered a email`}
    
    
    //Configuration of the account of code bakery
	let transporter = nodemailer.createTransport({
		service: 'gmail',
        auth: {
            user: 'codebakeryhenry@gmail.com',
            pass: 'ucobxdgpbyzqlchi' // naturally, replace both with your real credentials or an application-specific password
        }
	})
    //What is been sent to the client?
    const mailOptions = {
        to: user.email,
        subject: affair,
        html: message
      };
    //Send the email
    return transporter.sendMail(mailOptions)
    .then(info=>{
        return {__typename:"email", email:info.accepted[0], messageId:info.messageId}
    })
    .catch(err=>{
        return {__typename:"error",name:"Error sending email", detail:err.toString()}
    })
    
}

function getFormatedMessage(name, status, products){
    let salidaProducts = ""
    products.forEach(pro=>{
        salidaProducts += `<li>${pro.name} (${pro.quantity})</li>` 
    })

    if(status === "approved"){
        let message = `<html><span>Hi ${name}</span> <br>
        <span>You order is created and your payment is processed </span> <br>
        <span>Your products:</span>
        <ul>
        ${salidaProducts}
        </ul>
        <span>Thanks for buy with us, have a good day!</span>
        </html>`
        return message
    }else if(status === "pending"){
        let message = `<html><span>Hi ${name}</span> <br>
        <span>You order is created and your payment is processed </span> <br>
        <span>Your products:</span>
        <ul>
        ${salidaProducts}
        </ul>
        <span>Thanks for buy with us, have a good day!</span>
        </html>`
        return message
    }else{
        let message = `<html><span>Hi ${name}</span> <br>
        <span>You order is created but is in state ${status} </span> <br>
        <br>please contact with support, this not is normal</br>
        <span>Error code: the order have status ${status}
        <span>Thanks for buy with us, have a good day!</span>
        </html>`
        return message
    }
}

module.exports = {
	sendEmail,
    getFormatedMessage
};