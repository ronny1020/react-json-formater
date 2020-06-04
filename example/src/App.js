import React from 'react'

import { JsonFormatter } from 'react-json-formater'
import 'react-json-formater/dist/index.css'

const App = () => {
  const sample = `{
  "name": "react-json-formater-example",
  "homepage": ".",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ../node_modules/react-scripts/bin/react-scripts.js start",
    "build": "node ../node_modules/react-scripts/bin/react-scripts.js build",
    "test": "node ../node_modules/react-scripts/bin/react-scripts.js test",
    "eject": "node ../node_modules/react-scripts/bin/react-scripts.js eject"
  },
  "dependencies": {
    "react": "file:../node_modules/react",
    "react-dom": "file:../node_modules/react-dom",
    "react-scripts": "file:../node_modules/react-scripts",
    "react-json-formater": "file:.."
  },
  "devDependencies": {
    "@babel/plugin-syntax-object-rest-spread": "^7.8.3"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all",
    {"a":"a"}
  ]
}
`

  return <JsonFormatter json={sample} tabWith='4' />
}

export default App
