# rose

_“Currency Exchange” dashboard using React_

[![Build Status](https://travis-ci.org/d2s/rose.svg?branch=master)](https://travis-ci.org/d2s/rose)
[![Maintainability](https://api.codeclimate.com/v1/badges/fe6d5b787b6ab5f5e871/maintainability)](https://codeclimate.com/github/d2s/rose/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/fe6d5b787b6ab5f5e871/test_coverage)](https://codeclimate.com/github/d2s/rose/test_coverage)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2364edd47e2e4ee3a05f8aefe967e64c)](https://www.codacy.com/app/d2s/rose?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=d2s/rose&amp;utm_campaign=Badge_Grade)


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

### Building a production version of the application

After you have developed and tested things locally, you can use the following command to build a production version of the application.

```sh
yarn run build
```

### Deploying the application to a production environment

_TODO:_ More detailed instructions on how to deploy the application to an real world environment should be written.

- Static site hosting for the React-based SPA (Single Page Application)
- Static site hosting for the style guide


### Automated testing with 3rd party services

_TODO:_ Write details on how this application will be tested with 3rd party automated services for the code quality analysis and continuous integration (CI).

#### Running tests locally

You can simulate CI server's build environment with:

```sh
CI=true yarn run build
```

You can simulate CI server's test environment with:

```sh
CI=true yarn run build
```

> Treating warnings as errors because process.env.CI = true.
> Most CI servers set it automatically.

You could have a Git pre-commit hook that would check if there are any warnings (before allowing you to commit code to the Git repository). That would potentially reduce the potential issues in the future, while making sure that the code does not fall too much apart.

It is recommended to run the tests locally before you commit to the Git repository.


#### Running tests with CI server

- `.travis.yml` file contains the settings for the [Travis CI](https://docs.travis-ci.com/user/getting-started/) service.
  - [Building a JavaScript and Node.js project](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/) page has more instructions for running Node.js projects.
    - Remember that this project uses `yarn` instead of `npm` for managing dependencies. You should only use one of them, as there is an [issue](https://github.com/yarnpkg/yarn/issues/5240) (_"npm install" deletes everything from a Yarn-produced tree_) related to overlapping package managers.


## Git commit guidelines

This project's Git commit messages should follow the naming conventions of the [AngularJS](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits) project.
