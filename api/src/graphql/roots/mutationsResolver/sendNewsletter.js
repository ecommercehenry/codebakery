
const { sendNewsletter } = require("../../../services/newsletterService")

module.exports = {
    sendNewsletter: () => {
      return sendNewsletter()
    },
  }
  