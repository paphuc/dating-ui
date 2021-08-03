import * as React from 'react'
import { View, ActivityIndicator, Button } from 'react-native'
import { Image, Text, Header, Avatar, Chip } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'
import useHook, { PropsInterface } from './hook'
import AuthActions from '../../../redux/actions/auth'
import styles from './style'
import Colors from '../../../constants/Colors'
import IconButton from '../../../components/IconButton'

export default function ProfileScreen({ navigation }: PropsInterface) {
  const { Auth, Info, User, handleNavigate, handleLogout } = useHook({
    navigation,
  })
  return (
    <View style={styles.Container}>
      <Avatar
        rounded
        size='xlarge'
        source={Info && Info.media && { uri: Info.media[0] }}
        renderPlaceholderContent={<ActivityIndicator />}
        containerStyle={styles.Avatar}
      />
      <Text style={styles.Name}>{Info?.name}</Text>
      <View style={styles.ButtonContainer}>
        <IconButton
          size={50}
          name={'cog'}
          colors={Colors.GreyGradient}
          onPress={() => handleNavigate('SettingScreen')}
        />
        <IconButton
          size={60}
          name={'pencil'}
          onPress={() => handleNavigate('UpdateProfileScreens')}
        />
        <IconButton
          size={50}
          colors={Colors.GreyGradient}
          name={'sign-out'}
          onPress={() => handleLogout()}
        />
      </View>
    </View>
  )
}
