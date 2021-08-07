import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import InitialRoute from './screens/InitialRoute';
import Token_Balances from './screens/Token_Balances';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
      initialRouteName={"MainLayout"}
      >
        <Stack.Screen name="MainLayout" component={InitialRoute} options={{headerShown: false}} />
        <Stack.Screen name="Token_Balances" component={Token_Balances} options={{headerShown: false}} />
        {/* <Stack.Screen name="Home" component={Home}  /> */}
        {/* <Stack.Screen name="Ethereum" component={Ethereum}  /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

