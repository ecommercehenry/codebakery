
/*****CUAL ES LA UTILIDAD DE ESTE ARCHIVO?
 * PROBAR SERVICIOS DIRECTAMENTE SIN TENER QUE PASAR POR GRAPHQL
 */


 const { conn } = require("./src/db.js");
 const { dataPopulation } = require("./src/sequelize/dataPopulation");
 const {createOrder, getOrderById} = require("./src/services/orderService")
 
 // Syncing all the models at once.
 conn.sync({ force: true }).then(() => {
   dataPopulation().then(async ()=>{
     await createOrder([{id:1,quantity:10},{id:2,quantity:100}],1,100,999)
     await getOrderById(1)
   })
   
 });
 