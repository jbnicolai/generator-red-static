require('lib/qunit/qunit/qunit.js');
require('./helpers');

App.setupForTesting();
App.injectTestHelpers();

require('./controllers/*');
require('./components/*');
require('./mixins/*');
require('./models/*');
require('./routes/*');
require('./views/*');
