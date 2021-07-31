import React from 'react'
import { ListItem, Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { RoomInterface } from '../../redux/reducers/listRoomsMatch'

interface InboxElementProps {
  room: RoomInterface
  userID: string
}
const InboxItem = ({ room, userID }: InboxElementProps) => {
  const userTargetArr = room.users.filter((predicate) => {
    return predicate._id != userID
  })
  const userTarget = userTargetArr.length != 1 ? undefined : userTargetArr[0]
  console.log(userTarget);
  
  const AvatarElement = () => {
    if (userTarget?.avatar !== '') {
      return (
        <>
          <Avatar
            rounded
            source={{
              uri: userTarget?.avatar,
            }}
          />
        </>
      )
    }
    return (
      <>
        <Icon name={'user'} size={20} />
      </>
    )
  }

  return (
    <ListItem style={{ width: 800 }}>
      <AvatarElement />

      <ListItem.Content>
        <ListItem.Title
          style={{
            color: 'black',
            fontWeight: 'bold',
          }}
        >
          {userTarget?.name}
        </ListItem.Title>
        <ListItem.Subtitle style={{ color: 'black' }}>
          {room.last_message?.content}
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron color='black' />
    </ListItem>
  )
}

export default InboxItem
