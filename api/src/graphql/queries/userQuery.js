const graphql = require("graphql");
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
  } = graphql

const userQuery = new GraphQLObjectType({
    name: "UserQuery",
    fields: () => ({
        id: { type: GraphQLInt },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      }),
    // args:{
    //     id:{
    //         name:"id",
    //         type:GraphQLInt,
    //     },
    //     name:{
    //         name:"name",
    //         type:GraphQLString,
    //     },
    //     password:{
    //         name:"password",
    //         type:GraphQLString,
    //     },
    //     email:{
    //         name:"email",
    //         type:GraphQLString,
    //     },
    //     rol:{
    //         name:"rol",
    //         type:GraphQLInt,
    //     }
    // }
})

module.exports = {userQuery}
