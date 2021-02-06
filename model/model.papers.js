if (!process.env.GOOGLE_SERVICE_KEY) {
  throw new Error('Environment does not contain google service key.');
}

const firebase = require('firebase-admin');
const serviceKey = JSON.parse(process.env.GOOGLE_SERVICE_KEY);
const credential = firebase.credential.cert(serviceKey);
firebase.initializeApp({ credential });

const db = firebase.firestore();

const collection = 'papers';

const find = (id) =>
  db
    .collection(collection)
    .doc(id)
    .get()
    .then((doc) => doc.data()
  );

const findAll = () =>
  db
    .collection(collection)
    .get()
    .then((snapshot) => snapshot.docs.map((doc) => doc.data()));

const create = (id, title, published) =>
  db
    .collection(collection)
    .doc(id)
    .set({ title, id, published })
    .then(() => ({
      title,
      id,
      published,
    }))
    .catch((e) => {
      throw e;
    });

const destroy = (id) =>
  db
    .collection(collection)
    .doc(id)
    .delete()
    .then(() => `${id} successfully deleted`)
    .catch((e) => {
      throw e;
    });

module.exports = { findAll, find, create, destroy };
