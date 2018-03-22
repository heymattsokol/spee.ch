'use strict';
const bcrypt = require('bcrypt');
const logger = require('winston');

module.exports = (sequelize, { STRING }) => {
  const User = sequelize.define(
    'User',
    {
      userName: {
        type     : STRING,
        allowNull: false,
      },
      password: {
        type     : STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );

  User.associate = db => {
    User.hasOne(db.Channel);
  };

  User.prototype.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
  };

  User.prototype.changePassword = function (newPassword) {
    return new Promise((resolve, reject) => {
      // generate a salt string to use for hashing
      bcrypt.genSalt((saltError, salt) => {
        if (saltError) {
          logger.error('salt error', saltError);
          reject(saltError);
          return;
        }
        // generate a hashed version of the user's password
        bcrypt.hash(newPassword, salt, (hashError, hash) => {
          // if there is an error with the hash generation return the error
          if (hashError) {
            logger.error('hash error', hashError);
            reject(hashError);
            return;
          }
          // replace the current password with the new hash
          this
            .update({password: hash})
            .then(() => {
              resolve();
            })
            .catch(error => {
              reject(error);
            });
        });
      });
    });
  };

  // pre-save hook method to hash the user's password before the user's info is saved to the db.
  User.hook('beforeCreate', (user, options) => {
    logger.debug('User.beforeCreate hook...');
    return new Promise((resolve, reject) => {
      // generate a salt string to use for hashing
      bcrypt.genSalt((saltError, salt) => {
        if (saltError) {
          logger.error('salt error', saltError);
          reject(saltError);
          return;
        }
        // generate a hashed version of the user's password
        bcrypt.hash(user.password, salt, (hashError, hash) => {
          // if there is an error with the hash generation return the error
          if (hashError) {
            logger.error('hash error', hashError);
            reject(hashError);
            return;
          }
          // replace the password string with the hash password value
          user.password = hash;
          resolve();
        });
      });
    });
  });

  return User;
};
