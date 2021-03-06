const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./schema/schema.papers.js');
const { resolvers } = require('./resolver/resolver.papers.js');

const server = new ApolloServer({
  typeDefs, 
  resolvers,
});

const app = express();

server.applyMiddleware({app});

module.exports = { app, server }