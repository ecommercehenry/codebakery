const {generateTokenOTP} = require("../../../services/authService")

module.exports = {
	generateTokenOTP: (_, args) => {
		return generateTokenOTP(_.userId)
	}
}