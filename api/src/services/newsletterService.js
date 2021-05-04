const { cloudinary } = require('../../utils/cloudinary')
var nodemailer = require('nodemailer');
const { Users } = require("../db");

async function sendNewsletter(messaje){
  let emails;
  let imageUrl;
  console.log('back', messaje);
    try{
        let imageString = messaje;
        const uploadedResponse = await cloudinary.uploader.upload(imageString,{upload_preset:'code_bakery'});
        imageUrl = uploadedResponse.url;
        //console.log('url', uploadedResponse);
        //const messaje= {image: imageUrl}
        console.log('url', imageUrl);
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
  subject: 'Prueba newsletter',
  html: `<HTML><HEAD>
  <META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=utf-8"></HEAD>
  <BODY>
  <img src=${imageUrl} />
  </BODY>
  </HTML>
  `
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