import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import appReducers from './src/redux/reducers'

import useCachedResources from './src/hooks/useCachedResources'
import useColorScheme from './src/hooks/useColorScheme'
import Navigation from './src/navigation'
import logger from 'redux-logger'
import { useDispatch, useSelector } from 'react-redux'
import { Root } from './src/components/Message'
export const store = createStore(appReducers, applyMiddleware(thunk))

export default function App() {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <Root>
              <Navigation />
          </Root>
        </Provider>
        <StatusBar style='dark' />
      </SafeAreaProvider>
    )
  }
}
