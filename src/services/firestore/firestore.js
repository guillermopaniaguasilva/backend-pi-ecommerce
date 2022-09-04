const admin = require('firebase-admin');
const { firestore } = require('../../../config/config');

const serviceAccountConfig = {
  type: 'service_account',
  project_id: 'ecommerce-backend-d8e3d',
  private_key_id: firestore.privateKeyId,
  private_key: `-----BEGIN PRIVATE KEY-----\n${firestore.privateKey}\n-----END PRIVATE KEY-----\n`,
  client_email: firestore.clientEmail,
  client_id: firestore.clientId,
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-gm6ls%40ecommerce-backend-d8e3d.iam.gserviceaccount.com',
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountConfig),
});

module.exports = admin;
