#!/usr/bin/env node

global._ = require('lodash');
global.Promise = require('bluebird');

if (require.main === module) {
  require('./lib/bin').run();
} else {
  return require('./lib/main');
}
