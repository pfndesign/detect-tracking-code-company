# `detect-tracking-code-company`
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

detect Iranian post company based on their tracking code

## Install

[npm][]:

```sh
npm install detect-tracking-code-company
```

## Use
```js
var {detect} = require('detect-tracking-code-company')

console.log(detect("<code>"));
```

if finding company was successful will return an object :

```js
  {
    id:1,
    name:"post"
  }
```
if finding company is not successful will return "undefined"

#### list of available postal companies
1. post
2. tipaxco
3. tipaxco (contract)
4. mahex
5. chapar
6. karapost
7. tntiran
## want to help ?

if you want to help complete this library and make it more accurate you can create an issue describing the length and type of tracking code you received from a company (string, integer,word combination)

[MIT][license] © [Peyman farahmand][author]

<!-- Definition -->

[downloads-badge]: https://img.shields.io/npm/dm/detect-tracking-code-company.svg

[downloads]: https://www.npmjs.com/package/detect-tracking-code-company

[size-badge]: https://img.shields.io/bundlephobia/minzip/detect-tracking-code-company.svg

[size]: https://bundlephobia.com/result?p=detect-tracking-code-company

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://www.linkedin.com/in/pfndesign