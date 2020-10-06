import React from 'react'
import {View} from 'react-native'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Home from './pages/Home'
import Details from './pages/Details'

const AppStack = createStackNavigator()

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
       screenOptions={{
        headerShown: false
      }}
      >
        <AppStack.Screen 
            name="Home"
            component={Home}
        />
        
        <AppStack.Screen 
            name="Details"
            component={Details}
        />

      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default AppRoutes