import React, { useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, Dimensions, ScrollView, Image, StyleSheet, FlatList, TextInput, Modal, ActivityIndicator, Linking, PermissionsAndroid } from 'react-native';

const pages = [
    { name: "Terms & Conditions" },
    { name: "Privacy Policy" },
    { name: "Return Ploicy" },
    { name: "Acceptable Use Policy" },
    { name: "911 & E911 Disclosure" },
    { name: "Support" },
    { name: "Prepaid MTS Surcharge" },
]

const Footer = ({ title, navigation }) => {

    return (
        <View style={{ backgroundColor: '#051431', flex: 1 }}>
            <View style={styles.container}>
                <Image
                    source={require('../assets/logo_white.png')}
                    style={{ height: 40, width: 125, resizeMode: 'contain',marginTop:20 }}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:20 }}>
                    <TouchableOpacity>
                        <Text style={styles.title} >
                            Consumer
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>
                        Switch
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.title} >
                            Business
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                    <TouchableOpacity>
                        <Text style={styles.title} >
                            Shop plan
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>
                        How it works
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.title} >
                            FAQ
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginVertical:20}}>
                {pages.map((item, index) => {
                    return (
                        <TouchableOpacity>
                            <Text style={[styles.title,{textAlign:'left'}]} >
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    )
                })}
                </View>
                <Text style={[styles.title,{textAlign:'left'}]}>
                © Gotalk, 2022
                </Text>
            </View>
        </View>
    )
}
export default Footer;
const styles = StyleSheet.create({
    container: { paddingHorizontal: 20, paddingVertical: 10, },
    title: { fontSize: 16, color: '#fff', fontWeight: '500', flex: 0.8, textAlign: 'center', padding: 10 },
    HeaderTabTest: { fontSize: 14, color: '#ccc', paddingBottom: 15, paddingLeft: 15 }
})
