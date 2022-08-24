import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}
                options={{ headerShown: false, tabBarVisible: false, }}
            />
        </Stack.Navigator>
    )
}

export default MainStack 