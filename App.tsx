import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducers from './src/redux/reducers';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import Container from './src/components/Container'

export const store = createStore(
  appReducers
)

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Container>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </Container>
        </SafeAreaProvider>
      </Provider>
    );
  }
}
