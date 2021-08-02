import React from 'react'
import { View } from 'react-native'
import { ListItem, Avatar, Text } from 'react-native-elements'
import { IRoom, IUserInRoom, IUser } from '../../interfaces'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesome5 } from '@expo/vector-icons'
import Colors from '../../constants/Colors'
import { getThumbnailLink, renderDate } from '../../common/Utils'

interface InboxElementProps {
  room: IRoom
  userID: string
  onPress: () => void
}
const InboxItem = ({ room, userID, onPress }: InboxElementProps) => {
  const User: IUser = useSelector((value: any) => value.authStore?.user)

  const getTargetUser = (arr: IUserInRoom[]): IUserInRoom | undefined => {
    return arr.find((u: IUserInRoom) => u._id != User?._id)
  }
  const targetUser = getTargetUser(room.users)

  const renderContent = () => {
    return room.last_message?.attachments.length ? (
      <FontAwesome5 name='image' color={Colors.Grey.Dark} size={20} />
    ) : (
      <Text>{room.last_message?.content || ' '}</Text>
    )
  }

  return (
    <ListItem style={{}} onPress={onPress}>
      <Avatar
        size='large'
        rounded
        title={targetUser?.name[0]}
        source={
          targetUser?.avatar && {
            uri: getThumbnailLink(targetUser?.avatar, 'small'),
          } || undefined
        }
      />

      <ListItem.Content>
        <ListItem.Title
          style={{
            color: 'black',
            fontWeight:
              targetUser?._id == room.last_message?.sender_id ? 'bold' : '400',
            marginBottom: 10,
          }}
        >
          {targetUser?.name}
        </ListItem.Title>
        <ListItem.Subtitle>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            {renderContent()}
            <Text style={{ color: Colors.Grey.Dark }}>
              {'•' + renderDate(room.last_message?.created_at || 'unknown')}
            </Text>
          </View>
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  )
}

export default InboxItem
