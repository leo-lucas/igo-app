import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar
} from 'react-native'

import { Text } from './Components'

import { ListItem } from './Components'

import { profilePic1, profilePic2, profilePic3 } from './Static/images'
import colors from './Static/colors'

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text size={22}>Confirmados</Text>
        <ListItem bgColor={colors.june} name="Joana" image={profilePic1} />
        <ListItem bgColor={colors.june} name="Carlos" image={profilePic2} />
        <Text size={22}>Convidados</Text>
        <ListItem name="Leo" image={profilePic3} />
      </ScrollView>
    </SafeAreaView>
  )
}
export default App
