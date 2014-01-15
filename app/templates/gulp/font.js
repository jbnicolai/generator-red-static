'use strict';

var common = require('./common');

common.clean('font', 'fonts/**/*');
common.watch('font', 'fonts/**/*');
common.copy('font', 'fonts/**/*', 'fonts');
