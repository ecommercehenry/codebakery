const jwt = require("jsonwebtoken")
const { sendEmail } = require("../../../services/emailService")

module.exports = {
  sendEmail: (_, args) => {
    return sendEmail(_.userId, _.affair, _.message)
  },
}
