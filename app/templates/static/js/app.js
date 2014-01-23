var App = window.App = Ember.Application.extend({
	// LOG_ACTIVE_GENERATION: true,
	// LOG_TRANSITIONS: true,
	// LOG_VIEW_LOOKUPS: true
});

include('./mixins/*');
include('./controllers/*');
include('./models/*');
include('./routes/*');
include('./components/*');
include('./views/*');
include('./router');
