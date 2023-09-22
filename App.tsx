import { View, Text } from 'react-native'
import React from 'react'
import Stacknavigations from './src/Stacknavigation'
import { NativeBaseProvider } from 'native-base'

const App = () => {
  return (
    <NativeBaseProvider>

    <Stacknavigations />
    </NativeBaseProvider>
  )
}

export default App