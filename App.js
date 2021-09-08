import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login';
import Profile from './screens/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        
        <Stack.Navigator initialRouteName="Login">

          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Profile" component={Profile} />

        </Stack.Navigator>


      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
