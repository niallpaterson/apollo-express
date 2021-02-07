const mock = require('mock-require');

const papers = [
  {
    id: 1,
    title: 'Safety and Necessity',
    published: true,
  },
  {
    id: 2,
    title: 'Non-Accidental Knowing',
    published: true,
  },
];

mock('../model/model.papers.js', {
  find: (id) => papers.filter((paper) => paper.id === id)[0],
  findAll: () => papers,
  create: () => 'hello',
  destroy: () => 'hello',
});

module.exports = {};
