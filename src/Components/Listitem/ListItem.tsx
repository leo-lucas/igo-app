import React from 'react'
import { View, Image } from 'react-native'

import { profilePic1 } from 'src/Static/images'

import styles from './styles'

/**
 * List Item of the person that will go
 * @author Guilherme Zordan
 */
export default function ListItem(): JSX.Element {
  return (
    <View>
      <Image style={styles.pic} source={profilePic1} />
    </View>
  )
}
