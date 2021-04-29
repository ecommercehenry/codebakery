const {Store} = require('../db.js')


async function getAllStores(){
    try {

        return await Store.findAll()
    } catch (error) {
        console.log(error)
    }
}


module.exports = { getAllStores}