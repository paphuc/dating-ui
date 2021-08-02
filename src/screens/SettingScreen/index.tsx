import React from 'react'
import { Text, View } from 'react-native'
import { Switch } from 'react-native-elements'
import useHook, { Props } from './hook'

const SettingScreen = ({ navigation, route }: Props) => {
  const { item, disable, handleChangeDisable } = useHook({ navigation, route })

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'white',
          height: 50,
          borderRadius: 10,
        }}
      >
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
