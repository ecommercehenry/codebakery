const { Store } = require("../db.js");

async function getAllStores() {
  try {
    return await Store.findAll();
  } catch (error) {
    console.log(error.message);
  }
}

async function addStore({ name, lat, long, address, phoneNumber }) {
  try {
    let newStore = await Store.create({
      name,
      lat,
      long,
      address,
      phoneNumber,
    });
    return newStore;
  } catch (error) {
    console.log(error.message);
  }
}
async function modifyStore(args) {
  console.log("claro que si");
  try {
      let {id} = args
    let store = await Store.findByPk(id);
    store.address = args.address
    store.name = args.name
    store.lat = args.lat
    store.long = args.long
    store.phoneNumber = args.phoneNumber
    store.save()
    return store
  } catch (error) {
      console.log(error.message)
  }
}

async function deleteStore(args){
  try {
    Store.destroy({
      where:{
        id: args.id
      }
    })
    } catch (error) {
    console.log(error.message)
  }
}

module.exports = { getAllStores, addStore, modifyStore, deleteStore };
