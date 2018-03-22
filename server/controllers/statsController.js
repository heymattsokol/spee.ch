const logger = require('winston');
const db = require('../models/index');

module.exports = {
  getRecentClaims () {
    logger.debug('retrieving most recent claims');
    return new Promise((resolve, reject) => {
      // get the raw requests data
      db.File.getRecentClaims()
        .then(results => {
          resolve(results);
        })
        .catch(error => {
          logger.error('sequelize error', error);
          reject(error);
        });
    });
  },
};
