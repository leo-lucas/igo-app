import React, { FC } from 'react'
import { Provider } from 'react-redux'

import { store } from './Store'

const App: FC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default App
