const env = require('dotenv').config();

if (env.error) {
  console.error(env.error);
}

const PORT = process.env.PORT || 4000;

const { app } = require('./server.js');

app.listen(PORT, () =>
  console.log(`🚀 You're live and kicking on ${PORT}${server.graphqlPath}`)
);
