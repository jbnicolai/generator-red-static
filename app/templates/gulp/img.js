'use strict';

var common = require('./common');

common.clean('img', 'img/**/*');
common.watch('img', 'img/**/*');
common.copy('img', 'img/**/*', 'img');
