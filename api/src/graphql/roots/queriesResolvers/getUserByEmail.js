const { getUserByEmail } = require("../../../services/userService")

module.exports = {
    getUserByEmail: ({email}) => {
    return getUserByEmail({email})
  },
}