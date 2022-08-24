import React, { useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, Dimensions, ScrollView, Image, StyleSheet, FlatList, TextInput, Modal, ActivityIndicator, Linking, PermissionsAndroid } from 'react-native';



const Header = ({ title, navigation }) => {

    return (
        <View style={{ backgroundColor: '#fff' }}>
            <View style={styles.container}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity
                // onPress={() => navigation.goBack()}
                >
                    <Image source={require('../assets/menu.png')} style={{ marginRight: 15,height:20,width:25 }} />
                </TouchableOpacity>
                {/* <Text style={styles.title} >{title}</Text> */}
                <View>
                    <Image source={require('../assets/logo.png')} style={{ padding: 10,height:30,width:82 }} />
                </View>
                </View>
                <TouchableOpacity>
                <Image source={require('../assets/bag.png')} style={{ height:24,width:20 }} />
                </TouchableOpacity>
            </View >

        </View>
    )
}
export default Header;
const styles = StyleSheet.create({
    container: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10,justifyContent:'space-between' },
    title: { fontSize: 16, color: '#eee', fontWeight: '700', flex: 0.8, textAlign: 'center', padding: 10 },
    HeaderTabTest: { fontSize: 14, color: '#ccc', paddingBottom: 15, paddingLeft: 15 }
})
