var fs = require("fs"),
	path = require("path");

module.exports = function (grunt) {
	"use strict";

	var opts = {
		src: path.join(process.cwd(), "project/source/icons"),
		dest: path.join(process.cwd(), "project/source/fonts/"),
		scss: path.join(process.cwd(), "project/source/scss/project/fonts/_icons.scss"),
		name: "icons"
	};

	function compileIcons(cb) {
		//check if there is more than one SVG file in the directory.
		var files = fs.readdirSync(opts.src).filter(function (element) {
			return (element.indexOf(".svg") > 0);
		});

		// fontcustom has a bug with trying to compile a single svg file for some reason.
		// https://github.com/FontCustom/fontcustom/issues/68
		if (files.length < 2) {
			throw "FontCustom requires at least 2 svg files to correctly compile. Pretty jank right?";
		}

		var child = grunt.util.spawn({
			cmd: "fontcustom",
			args: [
				"compile", opts.src,
				"-o", opts.dest,
				"-t", "scss",
				"--font-face-path", "../fonts/",
				"-n", opts.name,
				'-h', false
			],
			opts: {
				cwd: "project"
			}
		}, cb);

		child.stdout.pipe(process.stdout);
		child.stderr.pipe(process.stderr);
	}

	function renameOutputCss (cb) {
		var src = path.join(opts.dest, "_fontcustom.scss");
		console.log("moving sass file from " + src.green + " to " + opts.scss.green);
		fs.rename(src, opts.scss, cb);
	}

	grunt.registerTask("icons", "Generate icon font-face", function () {
		var done = this.async();
		compileIcons(function () {
			renameOutputCss(done);
		});
	});
};
