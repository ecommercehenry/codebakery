/*****CUAL ES LA UTILIDAD DE ESTE ARCHIVO?
 * PROBAR SERVICIOS DIRECTAMENTE SIN TENER QUE PASAR POR GRAPHQL
 */


 const { conn } = require("./src/db.js");
 const { dataPopulation } = require("./src/sequelize/dataPopulation");
const { sendEmail } = require("./src/services/emailService.js");
 const {getAllOrders,getOrderById, updateOrderToTicket} = require("./src/services/orderService");
const { addReview , modifyReview} = require("./src/services/reviewsService.js");
 
 // Syncing all the models at once.
 conn.sync({ force: true }).then(() => {
   dataPopulation().then(async ()=>{
      let products = [{name:"1 producto",quantity:2},{name:"2 producto",quantity:2}]
      let salidaProducts = ``
      products.forEach(pro=>{
        salidaProducts += `<li>${pro.name} (${pro.quantity})</li>` 
      })
      let message = `<html><span>Hi santi</span> <br>
       <span>You order is created and we are waiting the payment</span> <br>
       <span>Your products:</span>
       <ul>
        ${salidaProducts}
       </ul>
       </html>`
      const a = await sendEmail(2,"Order",message)
      console.log(a)
   })
 });