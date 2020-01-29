import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'
import colors from '../../Static/colors'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.bleu,
    borderColor: colors.white,
    borderWidth: 2,
    alignItems: 'center',
    padding: 10
  },
  pic: {
    borderRadius: 100,
    height: scale(60),
    width: scale(60),
    marginRight: 10
  }
})
