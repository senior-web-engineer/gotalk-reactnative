import React from "react";
import { StyleSheet, Switch, Text, View } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SideDrawerComponent = ({ title, navigation }) => {

    return (
        <View style={{ padding: 20 }}>

            <View style={styles.rowCenter}>
                <Text style={styles.textStyleBold}>Sign In</Text>
                <View style={styles.findaPlanButton}>
                    <Text style={{ color: 'white' }}>Find a Plan</Text>
                </View>
                <SimpleLineIcons name={"logout"} size={16} color={'gray'} />
            </View>

            <View style={styles.horizontalLine} />

            <Text style={styles.menuItemstextStyle}>Check coverage</Text>
            <Text style={styles.menuItemstextStyle}>How it works</Text>
            <Text style={styles.menuItemstextStyle}>FAQ</Text>
            <Text style={styles.menuItemstextStyle}>Fraud Protection</Text>
            <Text style={styles.menuItemstextStyle}>Blog</Text>
            <Text style={styles.menuItemstextStyle}>Linxdot</Text>

            <View style={styles.footer}>
                <Text style={styles.textStyleBold}>Consumer</Text>
                <FontAwesome name={"toggle-off"} size={30} color={'#d3d3d3'} style={styles.toggle} />
                <Text style={styles.textStyle}>Business</Text>
            </View>

        </View>
    )
}
export default SideDrawerComponent;
const styles = StyleSheet.create({
    textStyleBold: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold'
    },

    textStyle: {
        color: '#000000',
        fontSize: 16,
    },

    menuItemstextStyle: {
        color: '#19263D',
        fontSize: 16,
        fontWeight: 'bold'
    },

    toggle: {
        marginLeft: 5,
        marginRight: 20
    },

    horizontalLine: {
        width: '100%',
        backgroundColor: 'black',
        height: 2,
        marginTop: 20,
        marginBottom: 20
    },

    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },

    findaPlanButton: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 80,
        backgroundColor: '#D7605C',
        marginHorizontal: 10
    },

    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})
