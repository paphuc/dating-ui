import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Button, Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import useHook from './hooks'
import styles from './style'
import { LinearGradient } from 'expo-linear-gradient'
import Colors from '../../constants/Colors'

export default function LoginScreen(props: any) {
  const { user, setUser, handleLogin, handleRegister } = useHook(props)

  return (
    <LinearGradient
      colors={Colors.MainBlueGradient}
      style={styles.Container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View></View>
      {/* INPUT FORM */}
      <View style={styles.FormContainer}>
        <Input
          placeholder='ex: Henry'
          label='Your name '
          value={user.name}
          onChangeText={(v: string) => setUser({ ...user, name: v })}
          leftIcon={<Icon name='user' size={24} color={'grey'} />}
        />
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

        <Input
          placeholder='Password'
          label='Retype password'
          secureTextEntry
          value={user.retypePassword}
          onChangeText={(v: string) =>
            setUser({
              ...user,
              retypePassword: v,
            })
          }
          leftIcon={<Icon name='lock' size={24} color={'grey'} />}
        />

        <Button
          linearGradientProps={{
            colors: Colors.MainBlueGradient,
            start: { x: 0, y: 0 },
            end: { x: 1, y: 0.1 },
          }}
          buttonStyle={{ borderRadius: 5 }}
          containerStyle={{
            borderRadius: 20,
            borderWidth: 1,
            borderColor: 'white',
          }}
          ViewComponent={LinearGradient}
          title='Register'
          onPress={handleRegister}
        />

        <Button type='clear' onPress={handleLogin} title='I have account' />
      </View>
    </LinearGradient>
  )
}
