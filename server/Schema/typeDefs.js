const { gql } = require('apollo-server-express')

const typeDefs = gql`
type Users{
    name:String!,
    phone: String!,
    email: String!,
    occupation: String!
}

#For querying all existing users
type Query{
    getAllUsers: [Users],
    # getUserByEntity(name: String):Users // Not applicable though
}

#Mutation , trying add new users from appolo explorer; not applicable though
# type Mutation{
#     createNewUser( name:String,
#     phone: String,
#     email: String,
#     occupation: String): Users!
# }

`;

module.exports = typeDefs