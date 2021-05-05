
const { sendNewsletter } = require("../../../services/newsletterService")

module.exports = {
    sendNewsletter: ( args) => {
      return sendNewsletter(args)
    },
  }
  //Creo que no lo necesito llamar desde mutation resolver.. puedo acceder a la funcion desde services directamente..
  