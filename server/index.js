const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const typeDefs = require('./Schema/typeDefs');
const resolvers = require('./Schema/resolvers');

//for handling https requests
app.use(cors());

//Setup for apollo server
const startServer = async (PORT = process.env.PORT || 4000 ) => {
    const server = new ApolloServer({ typeDefs, resolvers, instrospection: true })
    await server.start();
    server.applyMiddleware({ app });
    const serverInfo = app.listen(PORT)
    if (process.env.NODE_ENV !== 'test') {
        console.log(`Flash Cards Server running succes at ${PORT}`)
    }
    return serverInfo;
}

startServer();

module.exports = startServer