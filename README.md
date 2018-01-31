# rose

_“Currency Exchange” dashboard using React_


## Local development


### Install development dependencies

Requires that you first install [Yarn](https://yarnpkg.com/lang/en/) for managing the packages, and [Node.js](https://nodejs.org/en/) for running the software itself. You might also want to read a bit more details on about [how to install Node.js with nvm](https://gist.github.com/d2s/372b5943bce17b964a79) to Linux or macOS. 

After you have installed those, run the following command on your command line terminal (in the directory of this project's files) to automatically download and install the required [npm](https://www.npmjs.com/) packages for you. More detailed notes about [how to use Yarn](https://yarnpkg.com/en/docs/usage) can be read from the their documentation.

```sh
yarn install
```


### Start application

After you have installed the dependencies with Yarn, you can start the application locally in a development mode.

```sh
yarn start
```

### Run tests

For starting test runner, use:

```sh
yarn run test
```

#### Code coverage

Report about the code coverage of the test suite can be generated with:

```sh
yarn run coverage
```


### Style guide

Develop & debug individual React components with the [React Styleguidist](https://react-styleguidist.js.org/). It is an isolated React component development environment, with a living style guide.

#### Start the local styleguide with:

```sh
yarn run styleguide
```

#### Building static version of the style guide

If you want to make a static version of the style guide for people to look at, run the following command to generate it for you.

```sh
yarn run styleguide:build
```

### Building production version of the application

After you have developed and tested things locally, you can use the following command to build a production version of the application.

```sh
yarn run build
```

### Deploying application to a production

_TODO:_ More detailed instructions on how to deploy the application to an real world environment should be written.



