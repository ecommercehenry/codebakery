const { Store, Order } = require("../db.js");

async function getAllStores() {
  try {
    return await Store.findAll();
  } catch (error) {
    console.log(error.message);
  }
}

 async function getByStore(args) {
  let { id } = args
  try{
    let store = await Store.findOne({
      where: { id: id },
    });
    return store; 
  }catch(err){
    return {
      __typename: "error",
      name: "db error", 
      detail: 
      "Error in vinculation current order " + err.messag
    }
  }
 }

async function modifyOrderStore(args) {
let { idStore, idOrder } = args

  try{
  let store = await Store.findByPk(idStore);
  let order = await Order.findByPk (idOrder)
    let result = await store.addOrder(order)
    return {__typename: "booleanResponse" , boolean: true}
  }catch (err){
    return {
      __typename: "error", 
      name: "db error", 
      detail: 
      "Error in vinculation current order " + err.messag
    }
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

module.exports = { getAllStores, addStore, modifyStore, deleteStore, modifyOrderStore, getByStore };
