# Tend UI

## Creating new components for Tend UI

Add a new React Component to the library
```shell
$ yarn nx generate @nrwl/react:component {COMPONENT_NAME} --project=ui --export
```

// Selected styled-components
```shell
? Which stylesheet format would you like to use?
> styled-components [ https://styled-components.com ]
```

Generate stories for newly added Components.
```shell
$ yarn nx generate @nrwl/react:stories --project=ui
```

## Consuming

Components can be imported usng the following glob
```javascript
import { Box } from '@tend/ui';
```

## Running unit tests

Run `nx test ui` to execute the unit tests via [Jest](https://jestjs.io).
