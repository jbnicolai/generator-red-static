'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var RedStaticGenerator = module.exports = function RedStaticGenerator(args, options, config) {
	yeoman.generators.Base.apply(this, arguments);

	this.on('end', function () {
		this.installDependencies({ skipInstall: options['skip-install'] });
	});

	this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(RedStaticGenerator, yeoman.generators.Base);

RedStaticGenerator.prototype.askFor = function askFor() {
	var cb = this.async();

	// have Yeoman greet the user.
	console.log(this.yeoman);

	var prompts = [{
		name: 'projectName',
		message: 'What do you want to call your project?',
		default: 'My cool project'
	}];

	this.prompt(prompts, function (props) {
		this.projectName = props.projectName;

		cb();
	}.bind(this));
};

RedStaticGenerator.prototype.app = function app() {
	this.template('_package.json', 'package.json');
	this.template('_bower.json', 'bower.json');
};

RedStaticGenerator.prototype.projectfiles = function projectfiles() {
	this.copy('bowerrc', '.bowerrc');
	this.copy('editorconfig', '.editorconfig');
	this.copy('gitattributes', '.gitattributes');
	this.copy('gitignore', '.gitignore');
	this.copy('Gruntfile.js', 'Gruntfile.js');
	this.copy('jshintrc', '.jshintrc');
};

RedStaticGenerator.prototype.pages = function pages() {
	this.mkdir('pages');
	this.template('pages/_base.html', 'pages/_base.html');
	this.copy('pages/index.html', 'pages/index.html');
	this.copy('pages/404.html', 'pages/404.html');
	this.copy('pages/500.html', 'pages/500.html');
};

RedStaticGenerator.prototype.staticDir = function staticDir() {
	this.mkdir('static');
	this.mkdir('static/fonts');
	this.mkdir('static/icons');
	this.mkdir('static/img');
	this.mkdir('static/js');
};

RedStaticGenerator.prototype.scss = function scss() {
	this.mkdir('static');

	this.mkdir('static/scss');
	this.copy('static/scss/style.scss', 'static/scss/style.scss');
	this.copy('static/scss/config.rb', 'static/scss/config.rb');

	this.mkdir('static/scss/pages');
	this.copy('static/scss/pages/all.scss', 'static/scss/pages/__all.scss');
	this.copy('static/scss/pages/index.scss', 'static/scss/pages/_index.scss');

	this.mkdir('static/scss/base');
	this.copy('static/scss/base/body.scss', 'static/scss/base/_body.scss');
	this.copy('static/scss/base/header.scss', 'static/scss/base/_header.scss');
	this.copy('static/scss/base/footer.scss', 'static/scss/base/_footer.scss');

	this.mkdir('static/scss/fonts');
	this.copy('static/scss/fonts/all.scss', 'static/scss/fonts/__all.scss');
	this.copy('static/scss/fonts/icons.scss', 'static/scss/fonts/_icons.scss');

	this.mkdir('static/scss/mixins');
	this.copy('static/scss/mixins/mixins.scss', 'static/scss/mixins/_mixins.scss');

	this.mkdir('static/scss/placeholders');
	this.copy('static/scss/placeholders/placeholders.scss', 'static/scss/placeholders/_placeholders.scss');
};
