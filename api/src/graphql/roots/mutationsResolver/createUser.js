const { createUser } = require("../../../services/userService")
const jwt = require('jsonwebtoken');

module.exports = {
  createUser:  ({name, password, email, role}, args) => {
    try{
      let newUser =  createUser(name, password, email, role);
      return newUser;
    }catch{
      return {__typename: 'error', name: "error", detail: 'No admin'};
    }
  },
}
