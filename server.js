require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./schema/schema.papers.js');
const { resolvers } = require('./resolver/resolver.papers.js');

const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs, 
  resolvers,
});

const app = express();

server.applyMiddleware({app});

app.listen(PORT, () => console.log(`🚀 You're live and kicking on ${PORT}${server.graphqlPath}`));
