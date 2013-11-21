var <%= _.classify(projectName) %> = window.<%= _.classify(projectName) %> = Ember.Application.create();

require('js/mixins/*');
require('js/controllers/*');
require('js/models/*');
require('js/routes/*');
require('js/components/*');
require('js/views/*');
require('js/router');
