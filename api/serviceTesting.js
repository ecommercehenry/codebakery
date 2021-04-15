/*****CUAL ES LA UTILIDAD DE ESTE ARCHIVO?
 * PROBAR SERVICIOS DIRECTAMENTE SIN TENER QUE PASAR POR GRAPHQL
 */


 const { conn } = require("./src/db.js");
 const { dataPopulation } = require("./src/sequelize/dataPopulation");
 const {getOrdersByUserIdInCart,getOrdersByUserIdInTicket, updateOrderToTicket} = require("./src/services/orderService")
 
 // Syncing all the models at once.
 conn.sync({ force: true }).then(() => {
   dataPopulation().then(async ()=>{
      // await updateOrderToTicket(1)
      const a = await getOrdersByUserIdInTicket(1)
      console.log(a)
   })
   
 });