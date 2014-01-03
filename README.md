# RED Static Site Generator

RED Interactive's [Yeoman](http://yeoman.io) generator for static site projects.

## Frontend stack

* SASS + Compass
* Ember
* Ember Model

## Dependencies

You should have one path for each dependency.

```sh
which node npm grunt yo
which ruby gem compass
```

## Installation

```sh
npm install -g generator-red-static
```

## Usage

```sh
mkdir example && cd example
yo red-static
grunt server
```

## Updates

Update a project to a newer version of this generator will update the `./grunt` folder, the `Gruntfile.js`, and the `package.json` devDependancies.

```sh
yo red-static:update
```

## Contributing

See the [contributing guidelines](https://github.com/ff0000/generator-red-static/blob/master/contributing.md).

## Changelog

See the [changelog](https://github.com/ff0000/generator-red-static/blob/master/changelog.md).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
