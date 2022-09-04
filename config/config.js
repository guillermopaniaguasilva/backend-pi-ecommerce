require('dotenv').config();

const env = require('env-var');

const config = {
  /**
   * Configuration about the API.
   */
  API: {
    port: env.get('PORT').required().default(8080).asPortNumber(),
    database: env.get('DATABASE').required().asString(),
  },
  /**
   * Mongo DB configuration.
   */
  mongoDB: {
    user: env.get('MONGO_DB_USER').required().asString(),
    password: env.get('MONGO_DB_PASSWORD').required().asString(),
  },
  /**
   * Firestore configuration.
   */
  firestore: {
    privateKeyId: env.get('FIRESTORE_PRIVATE_KEY_ID').required().asString(),
    privateKey: env.get('FIRESTORE_PRIVATE_KEY').required().asString(),
    clientId: env.get('FIRESTORE_CLIENT_ID').required().asString(),
    clientEmail: env.get('FIRESTORE_CLIENT_EMAIL').required().asString(),
  },
};

module.exports = config;
