const papers = require('../model/model.papers.js');

const resolvers = {
  Query: {
    paper: (obj, {id}) => papers.find(id),
    papers: () => papers.findAll(),
  },
  Mutation: {
    createPaper: (obj, {id, title, published}) => papers.create(id, title, published),
    deletePaper: (obj, {id}) => papers.destroy(id)
  }
};

module.exports = { resolvers };
