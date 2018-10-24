# includes-validator
Provides validator for general purpose testing to identify existence of some pattern/object in text

## Install

### NPM
```sh
npm install includes-validator
```


## Usage

```js
const includes = require('includes-validator');

const includesPhone = includes.phone(someString);
const includesEmail = includes.email(someString);

console.log(`Does string includes phone? ${includesPhone}`);
console.log(`Does string includes email? ${includesEmail}`);
```