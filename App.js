import * as React from 'react';
import ProjectScreen from './components/ProjectScreen'
import MainScreen from './components/MainScreen'; 
import LoginScreen from './components/LoginScreen';
import { enableScreens } from 'react-native-screens';

enableScreens();  

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Main' component={MainScreen}/>
        <Stack.Screen name='Project' component={ProjectScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
