# mutahit

> React Custom Hooks

[![NPM](https://img.shields.io/npm/v/mutahit.svg)](https://www.npmjs.com/package/mutahit) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i mutahit
```

## or

```bash
yarn add mutahit
```

## Usage

```js
import React, { useState } from 'react'

import { useRandomColor, useNumberWithCommas, useConvertPrice } from 'mutahit'

const App = () => {
  const [color, setRandomColor] = useRandomColor()
  const [number, setNumber] = useState(0)
  return (
    <div style={{ backgroundColor: color, height: '100vh' }}>
      <button onClick={setRandomColor}>Change Color</button>

      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <p>{useNumberWithCommas(number)}</p>

      <p>{useConvertPrice(number, 'tr')}</p>
    </div>
  )
}

export default App
```

## Hooks

```js
const [color, setRandomColor] = useRandomColor()
color type: string (#000000)
setRandomColor type: function (set random color)
```

```js
useNumberWithCommas(number)
number type: number required (100000)
```

```js
useConvertPrice(number, lang)
number type: number required (100000)
lang type: string optional default: 'en'

```

```

## License

MIT © [mucahitkok](https://github.com/mucahitkok)
