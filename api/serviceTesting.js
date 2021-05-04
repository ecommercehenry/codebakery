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
const { getTokenResetPassword } = require("./src/services/userService");
const {
  getTokenAuth,
  validateTOTP,
  generateTokenOTP,
} = require("./src/services/authService");
// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  dataPopulation().then(async () => {
    const token = await generateTokenOTP(2);
    console.log(token);
    const a = await getTokenResetPassword(2);
    console.log(a);
  });
});
