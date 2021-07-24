import React from 'react'
import { View, Text } from 'react-native'
import SkeletonContent from 'react-native-skeleton-content'
import styles from './style'
const App = () => {
  return (
    <SkeletonContent
      containerStyle={styles.Container}
      isLoading={true}
      layout={[
        styles.Image,
        styles.Content,
        styles.ContentShort,
      ]}
    ></SkeletonContent>
  )
}
export default App
