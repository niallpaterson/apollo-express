const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    papers: [Paper]
    paper(id: Int!): Paper
  }
  type Mutation {
    createPaper(id: ID!, published: Boolean!, title: String!): Paper
    deletePaper(id: ID!): String
  }
  type Paper {
    id: Int!
    title: String!
    published: Boolean!
  }
`;

module.exports = { typeDefs };
