var nodemailer = require('nodemailer');
const { Users } = require("../db");


async function sendNewsletter(){
    try{
        users = await Users.findAll({ where: { newsletter:true } });
        console.log(" ---------------> " + users)
        //hacer un string con todos los mails de los users
     

    }catch(err){
        return {__typename:"error",name:"Unknow", detail:`Unknow error ocurred: ${err.message}`}
    }

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

}
module.exports = {
	sendNewsletter,
   
};