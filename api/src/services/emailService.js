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
    console.log("Sending email to: " + user.email)
    //What is been sent to the client?
    const mailOptions = {
        to: user.email,
        subject: affair,
        html: message
      };
    //Send the email
    return transporter.sendMail(mailOptions)
    .then(info=>{
        console.log("Email send!")
        console.log(info)
        return {__typename:"email", email:info.accepted[0], messageId:info.messageId}
    })
    .catch(err=>{
        console.log(err)
        return {__typename:"error",name:"Error sending email", detail:err.toString()}
    })
    
}


module.exports = {
	sendEmail,
};