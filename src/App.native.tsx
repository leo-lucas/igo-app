import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar
} from 'react-native'

import { Text } from './Components'

declare let global: { HermesInternal: null | {} }

import { ListItem } from './Components'

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <Text size={22}>Confirmados</Text>
      <ListItem name="as" image="dsaasd" />
    </SafeAreaView>
  )
}
export default App
