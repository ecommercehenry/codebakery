/*****CUAL ES LA UTILIDAD DE ESTE ARCHIVO?
 * PROBAR SERVICIOS DIRECTAMENTE SIN TENER QUE PASAR POR GRAPHQL
 */


 const { conn } = require("./src/db.js");
 const { dataPopulation } = require("./src/sequelize/dataPopulation");
 const {getAllOrders,getOrdersByUserIdInTicket, updateOrderToTicket} = require("./src/services/orderService");
const { addReview } = require("./src/services/reviewsService.js");
 
 // Syncing all the models at once.
 conn.sync({ force: true }).then(() => {
   dataPopulation().then(async ()=>{
     const a = await addReview(1,1,{title:"hola",description:"hola",stars:"4"})
     console.log(a)
   })
   
 });