import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import getMessages from './getMessages'
import {IntlProvider} from 'react-intl'

const locale = navigator.language.replace(/-.*/, '')
const messages = getMessages(locale)

ReactDOM.render(
  <IntlProvider locale={locale} messages={messages}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
)
