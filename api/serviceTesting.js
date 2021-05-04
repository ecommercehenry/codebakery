/*****CUAL ES LA UTILIDAD DE ESTE ARCHIVO?
 * PROBAR SERVICIOS DIRECTAMENTE SIN TENER QUE PASAR POR GRAPHQL
 */


 const { conn } = require("./src/db.js");
const { dataPopulation } = require("./src/sequelize/dataPopulation.js");
 const {getTokenAuth, validateTOTP, generateTokenOTP} = require("./src/services/authService")
 // Syncing all the models at once.
 conn.sync({ force: true }).then(async () => {
   dataPopulation().then(async ()=>{
     const token = await generateTokenOTP(2)
     console.log(token)
   })

   
 });