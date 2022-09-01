import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react';
import { Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import SideDrawerComponent from '../components/SideDrawerComponent';
import PersonalAccount from '../screens/PersonalAccount';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Security from '../screens/Security';

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const AppStack = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { justifyContent: 'center', paddingBottom: 6 },
            }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarLabel: ({ focused, color, size }) => (
                        <Text style={{ color: focused ? '#000000' : '#d3d3d3' }}>Home</Text>
                    ),
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Ionicons name={"home"} size={24} color={focused ? '#000000' : '#d3d3d3'} />
                        )
                    }
                }}
            />

            <Tab.Screen name="Security" component={Security}
                options={{
                    tabBarLabel: ({ focused, color, size }) => (
                        <Text style={{ color: focused ? '#000000' : '#d3d3d3' }}>Security</Text>
                    ),
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Ionicons name={"lock-closed"} size={24} color={focused ? '#000000' : '#d3d3d3'} />
                        )
                    }
                }}

            />

            <Tab.Screen name="PersonalAccount" component={PersonalAccount}
                options={{
                    tabBarLabel: ({ focused, color, size }) => (
                        <Text style={{ color: focused ? '#000000' : '#d3d3d3' }}>Account</Text>
                    ),
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Ionicons name={"person"} size={24} color={focused ? '#000000' : '#d3d3d3'} />
                        )
                    }
                }}
            />
        </Tab.Navigator>
    );
}

const MainStack = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }} drawerContent={(props) => <SideDrawerComponent {...props} />} >
            <Drawer.Screen name="AppStack" component={AppStack} />
        </Drawer.Navigator>
    )
}

export default MainStack