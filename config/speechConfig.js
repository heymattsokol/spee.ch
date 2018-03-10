const speechConfig = {
  analytics: {
    googleId: 'UA-60403362-6', // google id for analytics tracking; leave `null` if not applicable
  },
  session: {
    sessionKey: 'nans$#kfjanwe234rydns',  // enter a secret key to be used for session encryption
  },
  files: {
    uploadDirectory: '/home/lbry/Uploads',  // enter file path to where uploads/publishes should be stored
  },
  site: {
    title      : 'dev1.Spee.ch',
    name       : 'dev1.Spee.ch',
    host       : 'https://dev1.spee.ch',
    description: 'Open-source, decentralized image and video sharing.',
  },
  publish: {
    primaryClaimAddress     : 'bDZ2wPwtULUGxT7GXuNLpQhXmdPRUTUkcL',
    additionalClaimAddresses: ['banpwixPosfVDWnGvXqU2af36Qpsd7buGd'],
    thumbnailChannel        : '@dev1thumbs',  // create a channel to use for thumbnail images
    thumbnailChannelId      : 'aeb625ff6f66c3eeeb42885070f4e53876033626',  // the channel_id (claim id) for the channel above
  },
  claim: {
    defaultTitle      : 'dev1 Spee.ch',
    defaultThumbnail  : 'https://spee.ch/assets/img/video_thumb_default.png',
    defaultDescription: 'Open-source, decentralized image and video sharing.',
  },
};

module.exports = speechConfig;