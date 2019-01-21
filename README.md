# babel-plugin-arrow

form dwd arrow

Convert the prefix 'ant' to 'arrow'

## Example

**In**

```js
// input code
```

**Out**

```js
"use strict";

// output code
```

## Installation

```sh
$ npm install babel-plugin-arrow
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["arrow"]
}
```

### Via CLI

```sh
$ babel --plugins arrow script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["arrow"]
});
```
