var nodemailer = require('nodemailer');
const { Users } = require("../db");


async function sendNewsletter(messaje){
  let emails;
    try{
        users = await Users.findAll({ where: { newsletter:true } });
        // console.log(users)
        //hacer un string con todos los mails de los users
        emails = users.map(elem => elem.email)
    }catch(err){
        return {__typename:"error",name:"Unknow", detail:`Unknow error ocurred: ${err.message}`}
    }

var transporter = nodemailer.createTransport({
  service: 'gmail',
      auth: {
          user: 'codebakeryhenry@gmail.com',
          pass: 'ucobxdgpbyzqlchi' 
      }
})

var mailOptions = {
  from: 'codebakeryhenry@gmail.com',
  bcc: emails,
  subject: 'Sending Email using Node.js',
  html: messaje
};

return transporter.sendMail(mailOptions)
    .then(info=>{
        console.log("Email send!")
        return {__typename:"email", email:info.accepted[0], messageId:info.messageId}
    })
    .catch(err=>{
        console.log(err)
        return {__typename:"error",name:"Error sending email", detail:err.toString()}
    })
    

}
module.exports = {
	sendNewsletter,
   
};