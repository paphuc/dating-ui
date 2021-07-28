import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Button, Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import useHook from './hooks'
import styles from './style'

export default function LoginScreen(props: any) {
  const { user, setUser, handleLogin, handleRegister } = useHook(props)

  return (
    <View style={styles.Container}>
      <View></View>
      {/* INPUT FORM */}
      <View style={styles.FormContainer}>
        <Input
          placeholder='email@adress.com'
          label='Your email'
          value={user.email}
          onChangeText={(v: string) => setUser({ ...user, email: v })}
          leftIcon={<Icon name='envelope' size={24} color={'grey'} />}
        />
        <Input
          placeholder='Password'
          label='Password'
          secureTextEntry
          value={user.password}
          onChangeText={(v: string) => setUser({ ...user, password: v })}
          leftIcon={<Icon name='lock' size={24} color={'grey'} />}
        />
        <Button title='Login' onPress={handleLogin} />
        <Button
          type='clear'
          onPress={handleRegister}
          title="I don't have account"
        />
      </View>
    </View>
  )
}
