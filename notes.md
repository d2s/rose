# Project notes



## Adding charts

### Installing victory

More details from:
- [Victory | Getting Started](http://formidable.com/open-source/victory/docs)

```
$ yarn add victory
yarn add v1.3.2
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.1.2: The platform "linux" is incompatible with this module.
info "fsevents@1.1.2" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@1.1.3: The platform "linux" is incompatible with this module.
info "fsevents@1.1.3" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 19 new dependencies.
├─ d3-array@1.2.1
├─ d3-collection@1.0.4
├─ d3-color@1.0.3
├─ d3-ease@1.0.3
├─ d3-format@1.2.2
├─ d3-interpolate@1.1.6
├─ d3-path@1.0.5
├─ d3-scale@1.0.7
├─ d3-shape@1.2.0
├─ d3-time-format@2.1.1
├─ d3-time@1.0.8
├─ d3-timer@1.0.7
├─ d3-voronoi@1.1.2
├─ react-dom@16.2.0
├─ react@16.2.0
├─ victory-chart@24.6.1
├─ victory-core@20.6.0
├─ victory-pie@13.3.1
└─ victory@0.24.5
Done in 6.00s.
```


## Layout

### Add layout debugging tools

- [jxnblk/react-x-ray](https://github.com/jxnblk/react-x-ray) React CSS Layout Debugger

```
$ yarn add react-x-ray
yarn add v1.3.2
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.1.2: The platform "linux" is incompatible with this module.
info "fsevents@1.1.2" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@1.1.3: The platform "linux" is incompatible with this module.
info "fsevents@1.1.3" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 6 new dependencies.
├─ add-px-to-style@1.0.0
├─ chroma-js@1.3.6
├─ nano-style@1.0.0
├─ objss@1.0.3
├─ react-x-ray@1.0.0-4
└─ stylis@3.4.8
Done in 4.80s.
```

#### Using the layout debugger

Layout debugger can be disabled with a parameter.

```jsx
<XRay disabled="true">
```

It is possible to adjust defaultProps of the component.
Look for the list of available adjustments from the [XRay.js](https://github.com/jxnblk/react-x-ray/blob/master/src/XRay.js) source code.

```jsx
<XRay disabled="false" backgroundColor="#001424">
```



### Add glamorous

- [paypal/glamorous](https://github.com/paypal/glamorous) _Maintainable CSS with React_
- [glamorous - React component styling solved](https://glamorous.rocks/)

```
$ yarn add glamorous
yarn add v1.3.2
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.1.2: The platform "linux" is incompatible with this module.
info "fsevents@1.1.2" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@1.1.3: The platform "linux" is incompatible with this module.
info "fsevents@1.1.3" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning " > glamorous@4.11.4" has unmet peer dependency "glamor@>=2".
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 10 new dependencies.
├─ brcast@3.0.1
├─ fast-memoize@2.2.8
├─ glamorous@4.11.4
├─ html-element-attributes@1.3.0
├─ html-tag-names@1.1.2
├─ is-function@1.0.1
├─ is-plain-object@2.0.4
├─ isobject@3.0.1
├─ react-html-attributes@1.4.1
└─ svg-tag-names@1.1.1
Done in 3.83s.
```



#### Add `glamor` dependency

```
$ yarn add glamor
yarn add v1.3.2
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.1.2: The platform "linux" is incompatible with this module.
info "fsevents@1.1.2" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@1.1.3: The platform "linux" is incompatible with this module.
info "fsevents@1.1.3" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 5 new dependencies.
├─ bowser@1.9.1
├─ css-in-js-utils@2.0.0
├─ glamor@2.20.40
├─ hyphenate-style-name@1.0.2
└─ inline-style-prefixer@3.0.8
Done in 3.74s.
```






#### Add `prop-types` dependency

```
$ yarn add prop-types
yarn add v1.3.2
[1/4] Resolving packages...
[2/4] Fetching packages...
warning Pattern ["prop-types@^15.6.0","prop-types@^15.5.10"] is trying to unpack in the same destination "/home/d2s/.cache/yarn/v1/npm-prop-types-15.6.0-ceaf083022fc46b4a35f69e13ef75aed0d639856" as pattern ["prop-types@^15.6.0"]. This could result in a non deterministic behavior, skipping.
info fsevents@1.1.2: The platform "linux" is incompatible with this module.
info "fsevents@1.1.2" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@1.1.3: The platform "linux" is incompatible with this module.
info "fsevents@1.1.3" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning " > glamorous@4.11.4" has unmet peer dependency "glamor@>=2".
[4/4] Building fresh packages...
success Saved 1 new dependency.
└─ prop-types@15.6.0
Done in 3.55s.
```




## Adding style guide


### Adding React Styleguidist

[React Styleguidist](https://react-styleguidist.js.org/) is a tool for an _isolated React component development environment with a living style guide_.

- [Getting Started with React Styleguidist](https://react-styleguidist.js.org/docs/getting-started.html)

#### Start your style guide

To start a style guide dev server, run:
```
yarn run styleguide
```

To build a static version, run:
```
yarn run styleguide:build
```


## Adding testing tools

- [Testing Components](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#testing-components)

### Adding Enzyme

- [Installation · Enzyme](http://airbnb.io/enzyme/docs/installation/index.html)

```
yarn add react@16 react-dom@16
yarn add enzyme enzyme-adapter-react-16 react-test-renderer --dev
```
