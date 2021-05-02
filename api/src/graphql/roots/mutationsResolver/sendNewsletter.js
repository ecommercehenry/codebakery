
const { sendNewsletter } = require("../../../services/newsletterService")

module.exports = {
    sendNewsletter: (_, arg) => {
      return sendNewsletter(_.message)
    },
  }
  //Creo que no lo necesito llamar desde mutation resolver.. puedo acceder a la funcion desde services directamente..
  