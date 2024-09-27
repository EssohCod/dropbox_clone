const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'my_dropbox',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

