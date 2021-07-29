import React from 'react'
import {
  ListItem,
  Avatar,
} from 'react-native-elements'
import { RoomInterface } from '../../redux/reducers/listRoomsMatch'

interface InboxElementProps {
  room: RoomInterface
  userID: string
}
const InboxItem = ({
  room,
  userID,
}: InboxElementProps) => {
  const userTargetArr = room.users.filter(
    (predicate) => {
      return predicate._id != userID
    }
  )
  const userTarget =
    userTargetArr.length != 1
      ? undefined
      : userTargetArr[0]
  return (
    <ListItem style={{ width: 800 }}>
      <Avatar
        rounded
        source={{
          uri: userTarget?.avatar,
        }}
      />
      <ListItem.Content>
        <ListItem.Title
          style={{
            color: 'black',
            fontWeight: 'bold',
          }}
        >
          {userTarget?.name}
        </ListItem.Title>
        <ListItem.Subtitle
          style={{ color: 'black' }}
        >
          {room.last_message?.content}
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron color='black' />
    </ListItem>
  )
}

export default InboxItem
