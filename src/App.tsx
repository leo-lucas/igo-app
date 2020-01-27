import React, { FC } from 'react'
import { Provider } from 'react-redux'

import { store } from './Store'
import { Text } from 'react-native'

const App: FC = () => {
  return (
    <Provider store={store}>
      <Text>IGO</Text>
    </Provider>
  )
}

export default App
