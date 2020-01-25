import React from 'react'
import { View, Image } from 'react-native'

import { profilePic1 } from 'Static/images'

import styles from './styles'

interface Props {
  name: string
  image: string
}

/**
 * List Item of the person that will go
 * @author Guilherme Zordan
 */
export default function ListItem({ name, image }: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <Image style={styles.pic} source={profilePic1} />
    </View>
  )
}
