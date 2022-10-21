import React, { useState } from 'react'

import { useRandomColor, useNumberWithCommas, useConvertPrice } from 'mutahit'

const App = () => {
  const [color, setRandomColor] = useRandomColor()
  const [number, setNumber] = useState(0)
  return (
    <div style={{ backgroundColor: color, height: '100vh' }}>
      <button onClick={setRandomColor}>Change Color</button>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <p>{useNumberWithCommas(number)}</p>

      <p>{useConvertPrice(number,'tr')}</p>


    </div>
  )
}

export default App
