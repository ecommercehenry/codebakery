const {Store} = require('../db.js')


async function getAllStores(){
    try {
        return await Store.findAll()
    } catch (error) {
        console.log(error.message)
    }
}

async function addStore({name, lat, long, address, phoneNumber}){
    try {
        let newStore = await Store.create({name, lat,long,address,phoneNumber})
        return newStore
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = { getAllStores, addStore}