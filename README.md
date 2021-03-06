# react-json-formatter

> React component to formate json data

[![NPM](https://img.shields.io/npm/v/react-json-formatter.svg)](https://www.npmjs.com/package/react-json-formatter) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i react-json-formatter
```

## Usage

App.js

```jsx
import React from 'react'

import { JsonFormatter } from 'react-json-formatter'

const App = () => {
  const sample = `{
   "string":"ABCDE",
   "number":1,
   "null":null,
   "boolean":true,
   "object":{
      "string":"ABCDE",
      "number":1,
      "null":null,
      "boolean":true
   },
   "array":[
      1,
      2,
      3,
      4,
      {
      "string":"ABCDE",
      "number":1,
      "null":null,
      "boolean":true,
         "array":[
      1,
      2,
      3,
      4,
      {
      "string":"ABCDE",
      "number":1,
      "null":null,
      "boolean":true
   }
   ]
   }
   ]
}
`

  const JsonStyle = {
    propertyStyle: { color: 'red' },
    stringStyle: { color: 'green' },
    numberStyle: { color: 'darkorange' }
  }

  return <JsonFormatter json={sample} tabWith='4' JsonStyle={JsonStyle} />
}

export default App
```

## Demo

[Demo](https://ronny1020.github.io/react-json-formatter/)

## Attributes

### json : string(Json)

The string of Json to formate.

### tabWith : number

Number of spaces it should use per tab.
The default is 4.

## style

Use the Object JsonStyle to control the style of formatted Json.

- from the 0.2.0 version, NOT support for className.

| style         | part                                      |
| ------------- | ----------------------------------------- |
| propertyStyle | The properties of Object.                 |
| colonStyle    | The colons of Object.                     |
| style         | The whole parts of the formatted Json.    |
| tabSpaceStyle | The space of the tabs at Object or Array. |
| numberStyle   | The numbers in Json.                      |
| stringStyle   | The strings in Json.                      |
| trueStyle     | The boolean values of true in Json.       |
| falseStyle    | The boolean values of false in Json.      |
| nullStyle     | The null values in Json                   |
| commaStyle    | The commas used in Array and Object       |
| braceStyle    | The braces of Object.                     |
| bracketStyle  | The brackets of Array.                    |

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT © [ronny1020](https://github.com/ronny1020)
