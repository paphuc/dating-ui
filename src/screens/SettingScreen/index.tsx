import React from 'react'
import { Text, View } from 'react-native'
import { Switch } from 'react-native-elements'
import useHook, { Props } from './hook'
import styles from './style'

const SettingScreen = ({ navigation, route }: Props) => {
  const { item, disable, handleChangeDisable } = useHook({ navigation, route })

  return (
    <View style={styles.Container}>
      <View style={styles.FormItemsContainer}>
        <View>
          <Text>Disable Account: </Text>
        </View>
        <View>
          <Switch value={disable} onValueChange={handleChangeDisable} />
        </View>
      </View>
    </View>
  )
}
export default SettingScreen
