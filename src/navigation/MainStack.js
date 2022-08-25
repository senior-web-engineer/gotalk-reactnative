import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import PersonalAccount from '../screens/PersonalAccount';

const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName='PersonalAccount'>
            <Stack.Screen name="Home" component={Home}
                options={{ headerShown: false, tabBarVisible: false, }}
            />
            <Stack.Screen name="PersonalAccount" component={PersonalAccount}
                options={{ headerShown: false, tabBarVisible: false, }}
            />
        </Stack.Navigator>
    )
}

export default MainStack 