const {userQuery} = require("./queries/")

const graphql = require("graphql");

const {GraphQLSchema, GraphQLObjectType} = graphql

const rootQuery = new GraphQLObjectType({
    name: "RootQuery",
    description: "This is the root query which holds all possible READ entrypoints for the GraphQL API",
    fields: ()=>({
        user:userQuery,
    })
})

module.exports = new GraphQLSchema({
    query:rootQuery,
})



