# [Material Design Lite](http://getmdl.io/) + [Angular 1.X](https://angularjs.org/) + [WebPack](https://webpack.github.io/) + [Babel](https://babeljs.io/)

[![Dependency Status](https://david-dm.org/romuloalves/material-workflow/status.svg)](https://david-dm.org/romuloalves/material-workflow#info=dependencies) [![devDependency Status](https://david-dm.org/romuloalves/material-workflow/dev-status.svg)](https://david-dm.org/romuloalves/material-workflow#info=devDependencies)

This workflow serves as a starting point for building Angular 1.X applications using [WebPack](https://webpack.github.io/) and [Babel](https://babeljs.io/) with [Material Design Lite](http://getmdl.io/).

This project is based on [Foxandxss/angular-webpack-workflow](https://github.com/Foxandxss/angular-webpack-workflow) that is a workflow with Angular 1.X + WebPack + Babel.

## Features

* Heavily commented webpack configuration with reasonable defaults.
* ES6, and ES7 support with babel.js.
* Source maps included in all builds.
* Development server with live reload.
* Production builds with cache busting and asset minification.
* Testing environment using karma to run tests and jasmine as the framework.
* Code coverage when tests are run.
* No gulp and no grunt, just npm run-scripts.
* Material Design by Google.

## Installation

To use it, just clone this repo and install the npm dependencies:

```shell
$ git clone https://github.com/romuloalves/material-workflow app
$ cd app
$ npm install
```

## Scripts

All scripts are run with `npm run [script]`, for example: `npm run test`.

* `build` - generate a minified build to dist folder
* `dev` - start development server, try it by opening `http://localhost:8080/`
* `test` - run all tests
* `test:live` - continuously run unit tests watching for changes

See what each script does by looking at the `scripts` section in [package.json](./package.json).

## Observation

*This project it's a work in progress, a lot of Angular code are required, as well as layout to be developed.*

## License

MIT © [Rômulo Alves](http://romuloalves.com.br)
