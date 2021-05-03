/*****CUAL ES LA UTILIDAD DE ESTE ARCHIVO?
 * PROBAR SERVICIOS DIRECTAMENTE SIN TENER QUE PASAR POR GRAPHQL
 */

const { conn } = require("./src/db.js");
const { dataPopulation } = require("./src/sequelize/dataPopulation");
const {
  sendEmail,
  getFormatedMessage,
} = require("./src/services/emailService.js");
const {
  getAllOrders,
  getOrderById,
  updateOrderToTicket,
} = require("./src/services/orderService");
const { addReview, modifyReview } = require("./src/services/reviewsService.js");
const { saveImageSlider } = require("./src/services/imagesService");

 const { conn } = require("./src/db.js");
 const { dataPopulation } = require("./src/sequelize/dataPopulation");
const { sendEmail, getFormatedMessage } = require("./src/services/emailService.js");
 const {getAllOrders,getOrderById, updateOrderToTicket} = require("./src/services/orderService");
const { addReview , modifyReview} = require("./src/services/reviewsService.js");
 const {sendNewsletter} = require ("./src/services/newsletterService")
 // Syncing all the models at once.
 conn.sync({ force: true }).then(() => {
   dataPopulation().then(async ()=>{
     
    //aca se coloca para probar
     //const s = await getReviewByUserId(1);
    //addReview(1,1,{title:"hola",description:"hola",stars:"46"})
    //  const s = await modifyReview(1,{title:"Cambiadoooo",description:"hooe", stars:"3"})
    //const order = await getOrderById(1)
    //const a = await getFormatedMessage(order)
    //saveImageSlider("https://avatars.githubusercontent.com/u/68715166?v=4");
     

   })
 });
