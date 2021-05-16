import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { FormattedMessage } from 'react-intl'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>
        <FormattedMessage id="welcome" />
      </h1>
    </div>
  )
}

export default App
