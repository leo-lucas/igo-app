import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { scale } from 'react-native-size-matters'
import colors from '../../Static/colors'

interface Props {
  color?: string
  children?: string
  size?: number
}

/**
 * List Item of the person that will go
 * @author Guilherme Zordan
 */
export default function iGoText({
  color = colors.jet,
  size = 15,
  children = ''
}: Props): JSX.Element {
  const styles = StyleSheet.create({
    text: {
      color: color,
      fontSize: scale(size)
    }
  })

  return <Text style={styles.text}>{children}</Text>
}
