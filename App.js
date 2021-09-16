import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login';
import Dashboard from './screens/Dashboard';

import UserList from './screens/user/UserList';
import UserDetails from './screens/user/UserDetails';
import UserForm from './screens/user/UserForm';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        
        <Stack.Navigator initialRouteName="Login">

          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Dashboard" component={Dashboard} />

          <Stack.Screen name="UserList" component={UserList} />
          <Stack.Screen name="UserDetails" component={UserDetails} />
          <Stack.Screen name="UserForm" component={UserForm} />

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
