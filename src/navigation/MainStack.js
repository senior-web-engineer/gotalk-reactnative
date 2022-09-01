import React, {Component} from 'react'
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import PersonalAccount from '../screens/PersonalAccount';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../screens/DrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home}
                options={{ headerShown: false, tabBarVisible: false, }}
            />
            <Stack.Screen name="PersonalAccount" component={PersonalAccount}
                options={{ headerShown: false, tabBarVisible: false, }}
            />
        </Stack.Navigator>
    )
}

//export default MainStack 

class DrawerNavigator extends Component {
        constructor(props){
            super(props)
            this.state={
                data:[]
            }
        }
        render(){
            return(
                <SafeAreaView style={{flex:1}}>
                    <Drawer.Navigator screenOptions={({route, navigation})=>({headerShown:false, drawerStyle:{width:'85%'}})} drawerContent={props => <DrawerContent {...props}  />} >
                        <Drawer.Screen name="mainstack" component={MainStack} options={{swipeEnabled:false}}  />
                    </Drawer.Navigator>
                </SafeAreaView>
            )
        }
    }
    
    export default DrawerNavigator