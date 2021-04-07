const {User} = require("../sequelize/models/Persona")
function getAllUsers(){
    return  User.findAll()
    
}