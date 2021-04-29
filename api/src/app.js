const express = require("express");
const Stripe = require("stripe");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const { errorType } = require("./graphql/roots/errorsHandlers/errors");
require("./db.js");
const stripe = new Stripe(process.env.STRIPE_KEY);
const { Order } = require("./db");
/// mercadopago
const mercadopago = require("mercadopago"); //requerimos mercado pago

const { ACCESS_TOKEN } = process.env;
mercadopago.configurations.setAccessToken(`${ACCESS_TOKEN}`); //access-key
/// mercadopago
const server = express();
const {schema, root} = require("./graphql/schema");
const { sendEmail, getFormatedMessage } = require('./services/emailService');
const { getOrderById } = require('./services/orderService');
const { getCurrentDomainApi, getCurrentDomainFront } = require("./config/currentDomain");
server.name = 'API';

server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use(cors());

///mercadopago
server.use("/create_preference", (req, res) => {
  //ruta para crear preferencia
  let { lineal_order } = req.body;
  let items = [];
  lineal_order.map((item) => {
    let newitem = {
      title: item.name,
      unit_price: parseInt(item.price),
      quantity: parseInt(item.quantity),
      description: item.name, /// esto
      picture_url: item.image, /// esto
      id: item.id, /// y esto se puede obtener haciendo un curl
    }; /// posiblemente necesario para ticket
    items.push(newitem);
  });
  console.log(`${getCurrentDomainApi()}/feedback`)
  let preference = {
    items: items,
    external_reference: JSON.stringify(req.body.id),
    payment_methods: {
      excluded_payment_types: [],
      installments: 1, //Cantidad maxima de cuotas
    },
    back_urls: {
      success: `${getCurrentDomainApi()}/feedback`, //luego modificar si se quiere redigir en cada caso
      failure: `${getCurrentDomainApi()}/cart`,
      pending: `${getCurrentDomainApi()}/feedback`
    },
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json({ id: response.body.id }); //responde con un id
    })
    .catch(function (error) {
      console.log(error);
    });
});


server.use('/feedback', async function(req, res) {     //ruta que responde con el status del pago
  
  let orden = await Order.findByPk(parseInt(req.query.external_reference))
  let ordenCompleta = await getOrderById(orden.id)

  if (req.query.status === 'approved'){
      orden.placeStatus = 'ticket'
      orden.status = 'paid'
      await orden.save()
      await sendEmail(ordenCompleta.userId, `Order #${ordenCompleta.id} approved`, getFormatedMessage(ordenCompleta.name, "approved", ordenCompleta.lineal_order ))
    }else if (req.query.status === 'pending'){
      orden.placeStatus = 'ticket'
      orden.status = 'unpaid'
      await orden.save()
      await sendEmail(orden.userId, `Order #${orden.id} pending`, getFormatedMessage(ordenCompleta.name, "approved", ordenCompleta.lineal_order ))
    }
    if(process.env.NODE_ENV === "production"){
      return res.redirect(`${getCurrentDomainFront()}/catalogue`);
    }
    
  
})
///mercadopago

server.use(
  "/graphql",
  graphqlHTTP((req) => {
    return {
      schema: schema,
      extensions({ result, variables, document }) {},
      rootValue: root,
      graphiql: true,
    };
  })
);

server.use("/stripe/checkout", async (req, res) => {
  const { id, amount } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "",
      payment_method:id,
      confirm:true
    })
    let order = await Order.findByPk(parseInt(req.body.products.id))
    let ordenCompleta = await getOrderById(order.id)
    //console.log(payment.status)
    //console.log(order)
    if(payment.status === 'succeeded'){
      order.status = 'paid'
      order.placeStatus = 'ticket'
      await order.save()
      sendEmail(ordenCompleta.userId, `Order #${ordenCompleta.id} approved!`, getFormatedMessage(ordenCompleta.name, "approved", ordenCompleta.lineal_order ))
      res.json({message:'successfull transaction'})
    }
  } catch (error) {
    console.log(error)
    res.send({message:error.message})

  }
});

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  //console.error(err);
  res.status(status).send(message);
});

module.exports = server;
