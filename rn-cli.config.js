// Copyright 2004-present Facebook. All Rights Reserved.

/**
 * React Native CLI configuration file
 */
'use strict';

const blacklist = require('react-native/packager/blacklist.js');
const path = require('path');

module.exports = {
  getProjectRoots() {
    return this._getRoots();
  },

  getAssetRoots() {
    return this._getRoots();
  },

  getBlacklistRE(platform) {
    return blacklist(platform);
  },

  _getRoots() {
    return [path.resolve(__dirname)];
  },
};
