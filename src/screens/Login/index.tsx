import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Button, Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import useHook from './hooks'
import styles from './style'
import { LinearGradient } from 'expo-linear-gradient'
import Colors from '../../constants/Colors'

export default function LoginScreen(props: any) {
  const { user, setUser, handleLogin, handleRegister, auth } = useHook(props)

  return (
    <LinearGradient
      colors={Colors.MainBlueGradient}
      style={styles.Container}
      start={{ x: 0, y: 0.2 }}
      end={{ x: 1, y: 1 }}
    >
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
        <Button
          linearGradientProps={{
            colors: Colors.RedGradient,
            start: { x: 0, y: 0 },
            end: { x: 1, y: 1 },
          }}
          ViewComponent={LinearGradient}
          disabled={auth.isLoading}
          title='Login'
          onPress={handleLogin}
          loading={auth.isLoading}
        />
        <Button type='clear' onPress={handleRegister} title='Register' />
      </View>
    </LinearGradient>
  )
}
