# await-to

Solve the try-catch hell using golang style error handling.

## Install

    npm i @klipitkas/await-to --save

## Usage

```js
import { to } from 'await-to';

const doSomething = () => {
  const [ data, error ] = await to(resolveOrRejectSomePromise());

  if (error) {
    throw new Error("Whoops!");
  }

  return data;
}
```

## Test

    npm run test
