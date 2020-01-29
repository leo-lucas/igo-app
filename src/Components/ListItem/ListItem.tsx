import React from 'react'
import { View, Image } from 'react-native'

import Text from '../Text'

import colors from '../../Static/colors'

import styles from './styles'

interface Props {
  name: string
  image: string
  bgColor?: string
}

/**
 * List Item of the person that will go
 * @author Guilherme Zordan
 */
export default function ListItem({
  name = '',
  image = '',
  bgColor = colors.bleu
}: Props): JSX.Element {
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Image style={styles.pic} source={image} />
      <Text size={18} color={colors.white}>
        {name}
      </Text>
    </View>
  )
}
