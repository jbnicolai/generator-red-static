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

RedStaticGenerator.prototype.projectfiles = function projectfiles() {
	this.template('_package.json', 'package.json');
	this.template('_bower.json', 'bower.json');
	this.copy('bowerrc', '.bowerrc');
	this.copy('editorconfig', '.editorconfig');
	this.copy('gitattributes', '.gitattributes');
	this.copy('gitignore', '.gitignore');
	this.copy('Gruntfile.js', 'Gruntfile.js');
	this.copy('jshintrc', '.jshintrc');
};

RedStaticGenerator.prototype.pages = function pages() {
	this.directory('pages');
	this.template('pages/_base.html', 'pages/_base.html');
};

RedStaticGenerator.prototype.staticDir = function staticDir() {
	this.mkdir('static');
	this.mkdir('static/fonts');
	this.mkdir('static/icons');
	this.mkdir('static/img');
	this.mkdir('static/js');
};

RedStaticGenerator.prototype.scss = function scss() {
	this.directory('static/scss');
};
