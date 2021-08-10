import React, { useEffect, useRef, useState } from 'react'
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Animated,
  Easing,
} from 'react-native'
import { Input, Button, Text, Image, SocialIcon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import useHook from './hooks'
import styles from './style'
import { LinearGradient } from 'expo-linear-gradient'
import Colors from '../../constants/Colors'
import { withAnchorPoint } from 'react-native-anchor-point'

export default function LoginScreen(props: any) {
  const { user, setUser, handleLogin, handleRegister, auth } = useHook(props)
  const loginAnim = useRef(new Animated.Value(0)).current
  const [push, setPush] = useState(false)

  React.useEffect(() => {
    Animated.timing(loginAnim, {
      toValue: push ? 1 : 0,
      delay: 100,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start()
  }, [push])

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
        setPush(false)
      }}
    >
      <LinearGradient
        colors={Colors.PinkGradient}
        style={styles.Container}
        start={{ x: 0, y: 0.2 }}
        end={{ x: 1, y: 1 }}
      >
        <Animated.View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            opacity: loginAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0.5],
            }),
          }}
        >
          <Image
            resizeMode={'stretch'}
            source={require('../../../assets/images/logo.png')}
            style={styles.Logo}
          />
        </Animated.View>
        {/* INPUT FORM */}
        <KeyboardAvoidingView
          // style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
        >
          <View style={{ alignItems: 'center' }}>
            <View style={[styles.LoginContainer]}>
              <Animated.View
                style={[
                  styles.FormContainer,
                  { transform: [{ scale: loginAnim }] },
                ]}
              >
                <Input
                  placeholder='email@adress.com'
                  value={user.email}
                  onChangeText={(v: string) => setUser({ ...user, email: v })}
                  leftIcon={<Icon name='envelope' size={24} color={'grey'} />}
                />
                <Input
                  placeholder='Password'
                  secureTextEntry
                  value={user.password}
                  onChangeText={(v: string) =>
                    setUser({ ...user, password: v })
                  }
                  leftIcon={<Icon name='lock' size={24} color={'grey'} />}
                />
              </Animated.View>
              <Button
                linearGradientProps={{
                  colors: Colors.PinkGradient,
                  end: { x: 0, y: 0 },
                  start: { x: 0.8, y: 0.1 },
                }}
                buttonStyle={{ padding: 15 }}
                containerStyle={[styles.Button]}
                ViewComponent={LinearGradient}
                disabled={auth.isLoading}
                title='Login'
                titleStyle={{ fontWeight: 'bold' }}
                onPress={() => {
                  push && handleLogin()
                  setPush(!push)
                }}
                loading={auth.isLoading}
              />
            </View>
            {/* <SocialIcon type='facebook' style={styles.SocialButton} />
            <SocialIcon type='google' style={styles.SocialButton} /> */}
          </View>
        </KeyboardAvoidingView>
        <Text style={styles.Copyright}>© 2021 Internal app of TMA corp.</Text>
      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}
