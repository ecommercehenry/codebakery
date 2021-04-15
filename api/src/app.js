const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { graphqlHTTP } = require("express-graphql");
const cors = require('cors')
const {errorType} = require("./graphql/roots/errorsHandlers/errors")
require('./db.js');

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

server.use('/graphql', graphqlHTTP((req)=>{
  console.log("HEADER: "+req.headers.authtoken+' '+req.headers.authrole )
  return ({
  schema: schema,
  extensions({
    result,
    variables,
    document
  }) {
    /* console.log("VARIABLES")
    console.log(variables);
    console.log("RESULT")
    console.log(result) */
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
