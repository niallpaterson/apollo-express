require('../mock/mock.model.js');
const it = require('ava');
const request = require('supertest');
const { app, server } = require('../server.js');

const endpoint = server.graphqlPath;

it('returns a paper if paper is requested', async (t) => {
  const query = `{ "query": "{ paper(id: 1) { published, id, title }}" }`;
  const res = await request(app)
    .post(endpoint)
    .set('Content-Type', 'application/json')
    .send(query);

  const expected = ['published', 'id', 'title'];
  const actual = Object.keys(res.body.data.paper);
  t.deepEqual(actual, expected);
  t.pass();
});

it('returns an array if papers is requested', async (t) => {
  const query = `{ "query": "{ papers { title, id, published }}" }`;
  const res = await request(app)
    .post(endpoint)
    .set('Content-Type', 'application/json')
    .send(query);

  const expected = true;
  const actual = Array.isArray(res.body.data.papers);
  t.is(actual, expected);
  t.pass();
});

it('returns an array of papers if papers is requested', async (t) => {
  const query = `{ "query": "{ papers { title, id, published }}" }`;
  const res = await request(app)
    .post(endpoint)
    .set('Content-Type', 'application/json')
    .send(query);

  const expected = ['title', 'id', 'published'];
  const actual = Object.keys(res.body.data.papers[0]);
  t.deepEqual(actual, expected);
  t.pass();
});
