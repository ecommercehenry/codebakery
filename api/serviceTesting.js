/*****CUAL ES LA UTILIDAD DE ESTE ARCHIVO?
 * PROBAR SERVICIOS DIRECTAMENTE SIN TENER QUE PASAR POR GRAPHQL
 */


 const { conn } = require("./src/db.js");
 const { dataPopulation } = require("./src/sequelize/dataPopulation");
 const {createOrder, getOrderById, updateOrderPrices, deleteProductOrder} = require("./src/services/orderService")
 
 // Syncing all the models at once.
 conn.sync({ force: true }).then(() => {
   dataPopulation().then(async ()=>{
     await updateOrderPrices(1)
     await deleteProductOrder(1, 1)

   })
   
 });