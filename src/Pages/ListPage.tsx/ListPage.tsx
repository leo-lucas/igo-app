import React from 'react'
import { View, Image } from 'react-native'

import { profilePic1 } from 'src/Static/images'

/**
 * Displays the list of people that will go
 * @author Guilherme Zordan
 * @param Props
 */
export default function ListScreen() {
  return (
    <View>
      <Image source={profilePic1} />
    </View>
  )
}
