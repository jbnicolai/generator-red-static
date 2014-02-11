Ember.Test.registerHelper('module', function (app, name, opts) {
	opts = opts ||  {
		setup: function () {
			location.hash = '';
			app.reset();
		},
	};
	QUnit.module(name, opts);
});

Ember.Test.registerHelper('invokeHelper', function (app, helperName, parameter) {
	var helper = Ember.Handlebars.helpers[helperName];

	Ember.assert("The " + helperName + " helper was not found", helper);

	return helper._rawFunction(parameter);
});
