/*****CUAL ES LA UTILIDAD DE ESTE ARCHIVO?
 * PROBAR SERVICIOS DIRECTAMENTE SIN TENER QUE PASAR POR GRAPHQL
 */


 const { conn } = require("./src/db.js");
 const { dataPopulation } = require("./src/sequelize/dataPopulation");
const { sendEmail, getFormatedMessage } = require("./src/services/emailService.js");
 const {getAllOrders,getOrderById, updateOrderToTicket} = require("./src/services/orderService");
const { addReview , modifyReview} = require("./src/services/reviewsService.js");
 
 // Syncing all the models at once.
 conn.sync({ force: true }).then(() => {
   dataPopulation().then(async ()=>{
      const order = await getOrderById(1)
      const a = await getFormatedMessage(order)
   })
 });