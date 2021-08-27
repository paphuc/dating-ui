import 'react-native-gesture-handler'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import appReducers from './src/redux/reducers'
import Navigation from './src/navigation'
import logger from 'redux-logger'
import { useDispatch, useSelector } from 'react-redux'
import { Root } from './src/components/Message'
import { StatusBar } from 'react-native'
export const store = createStore(appReducers, applyMiddleware(thunk))

export default function App() {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <Root>
            <Navigation />
          </Root>
        </Provider>
        <StatusBar backgroundColor='transparent' translucent={true} barStyle="dark-content" />
      </SafeAreaProvider>
    )
}
