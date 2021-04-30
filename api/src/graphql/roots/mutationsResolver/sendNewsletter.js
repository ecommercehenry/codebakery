
const { sendNewsletter } = require("../../../services/newsletterService")

module.exports = {
    sendNewsletter: () => {
      return sendNewsletter()
    },
  }
  //Creo que no lo necesito llamar desde mutation resolver.. puedo acceder a la funcion desde services directamente..
  