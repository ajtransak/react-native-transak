import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import ErrorScreen from '../screens/ErrorScreen';
import HomeScreen from '../screens/HomeScreen';
import PaymentScreen from '../screens/PaymentScreen';
import {AppStackParamsList} from '../types/screens';

const Stack = createNativeStackNavigator<AppStackParamsList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HOME"
        screenOptions={{
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name="HOME" component={HomeScreen} />
        <Stack.Screen
          name="PAYMENT"
          component={PaymentScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen name="ERROR" component={ErrorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
