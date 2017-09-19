# Univision Interview Project

This is a Flickr API Search app.

## Run

To install dependencies via `yarn`, as well as launch `webpack-dev-server`:

```
yarn install
yarn start
```

Or, if using `npm`:

```
npm install
npm start
```

If developing, use `--watch` to automatically reload on file change.

```
yarn start --watch
```

## Build

To build the development version (i.e., output static files):

```
yarn build
```

The project will be built to the `./build` directory.

### Tech Stack Requirements implemented in this project

* React (with Redux, using `redux-logger` and `redux-promise-middleware`)
* Webpack 3
* ES6 (project supports ES2017)
* Eslint (React, ES6)

## TODO

* Styling is presently very minimal - utilize the existing Sass loader in this project, and 
develop grid styles, as well as mixins for reusable and computed styles
* Style of Slideshow component should be made responsive
* Tests - NOTE: `babel-jest` is proving to be a headache when tranforming tests using ES6 syntax.
When this is resolved, more test coverage needs to be introduced.
    * Additional unit tests (Jest/Enzyme) for React components
    * Additional unit tests for Redux reducers and actions, with `redux-mock-store`