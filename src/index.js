import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import './styles/index.less'

import App from './App'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(App)

ReactDOM.render(<App />, document.getElementById('root'))

if(module.hot) {
  module.hot.accept('./App', () => { render(App) })
}