const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { graphqlHTTP } = require("express-graphql");
const cors = require('cors')
const {errorType} = require("./graphql/roots/errorsHandlers/errors")
require('./db.js');
/// mercadopago
const mercadopago = require("mercadopago"); //requerimos mercado pago

const {ACCESS_TOKEN} = process.env
mercadopago.configurations.setAccessToken(`${ACCESS_TOKEN}`); //access-key
/// mercadopago
const server = express();
const {schema, root} = require("./graphql/schema")
server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use(cors())
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


const getErrorCode = errorName =>{
  console.log("owefjwoiefjweofjweoifjwoeifjAAAAAAAAAAAAAAAAAAAA"+errorName)
  return errorType[errorName]
}
///mercadopago
server.post("/create_preference", (req, res) => {   //ruta para crear preferencia
  let {body} = req
  let items =[]
  body.map((item ) =>{
    let newitem = {
      title: item.name ,
      unit_price: parseInt(item.price),
      quantity: parseInt(item.quantity),
    }
    items.push(newitem)
  }) 
  let preference = {
		items: items,
    
		back_urls: {
			"success": "http://localhost:3001/feedback",            //luego modificar si se quiere redigir en cada caso
			"failure": "http://localhost:3001/feedback",
			"pending": "http://localhost:3001/feedback"
		},
		auto_return: 'approved',
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({id :response.body.id})      //responde con un id 
		}).catch(function (error) {
			console.log(error);
		});
});

server.get('/feedback', function(req, res) {     //ruta que responde con el status del pago
  console.log('feedback',res)
	 res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	})
});

///mercadopago

server.use('/graphql', graphqlHTTP((req)=>{
  console.log("HEADER: "+req.headers.authtoken+' '+req.headers.authrole )
  return ({
  schema: schema,
  extensions({
    result,
    variables,
    document
  }) {
    console.log("VARIABLES")
    console.log(variables);
    console.log("RESULT")
    console.log(result) 
  },
  rootValue: root,
  graphiql: true
  
})}))


// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  //console.error(err);
  res.status(status).send(message);
});

module.exports = server;
