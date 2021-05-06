const { buildSchema } = require("graphql")
const mutations = require("./mutations/mutations")
const queries = require("./queries/queries")
const root = require("./roots")
// estos son los objetos de las consultas
const types = require("./types")
// párametros que reciben los modelos de las consultas
const inputs = require('./inputs');
// 

const schema = buildSchema(`
#Queries ( to get data )
${queries}

#Mutations ( to manipulate data )
${mutations}

#Inputs
${inputs}

#types
${types}


`)


module.exports = { schema, root }
