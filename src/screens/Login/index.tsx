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
import Layout from '../../constants/Layout'
import { withAnchorPoint } from 'react-native-anchor-point'

export default function LoginScreen(props: any) {
  const { user, setUser, handleLogin, handleRegister, auth } = useHook(props)
  const loginAnim = useRef(new Animated.Value(0)).current
  const [logo, setLogo] = useState(1)
  const [push, setPush] = useState(false)
  useEffect(() => {
    loginAnim.addListener(({ value }) => setLogo(1.5 - value))
  }, [])

  React.useEffect(() => {
    Animated.timing(loginAnim, {
      toValue: push ? 1 : 0,
      delay: 100,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start()
  }, [push])

  const getTransform = () => {
    let transform = {
      transform: [{ scaleY: loginAnim }],
    }
    return withAnchorPoint(
      transform,
      { x: 1, y: 0.9 },
      { width: 270, height: 270 }
    )
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
        setPush(false)
      }}
    >
      <LinearGradient
        colors={Colors.MainBlueGradient}
        style={styles.Container}
        start={{ x: 0, y: 0.2 }}
        end={{ x: 1, y: 1 }}
      >
        <Animated.View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            opacity: logo,
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
              <Animated.View style={[styles.FormContainer, getTransform()]}>
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
                  onChangeText={(v: string) =>
                    setUser({ ...user, password: v })
                  }
                  leftIcon={<Icon name='lock' size={24} color={'grey'} />}
                />
              </Animated.View>
              <Button
                linearGradientProps={{
                  colors: Colors.MainBlueGradient,
                  start: { x: 0, y: 0 },
                  end: { x: 1, y: 0.1 },
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
            <SocialIcon type='facebook' style={styles.SocialButton} />
            <SocialIcon type='google' style={styles.SocialButton} />
          </View>
        </KeyboardAvoidingView>
        <Text style={styles.Copyright}>© 2021 Internal app of TMA corp.</Text>
      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}
