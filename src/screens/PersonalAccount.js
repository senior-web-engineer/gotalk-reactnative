import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, Dimensions, TouchableOpacity, FlatList, TextInput } from 'react-native';
import Header from '../components/Header';
import Footer from "../components/Footer";
import ProgressCircle from 'react-native-progress-circle'

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const pts = [
    { pt: "Mollis Ornare Pretium" },
    { pt: "Aenean Pretium" },
    { pt: "Donec Convallis Metus" },
    { pt: "Integer Volutpat" },
    { pt: "Donec Convallis Metus" },
    { pt: "Quis Euismod Pharetra" },
]

const callhistory = [
    {
        dt: "12.20.2021 17:25",
        duration: "3.43",
        num: "+1 888 888-88-88"
    },
    {
        dt: "12.20.2021 17:25",
        duration: "3.43",
        num: "+1 888 888-88-88"
    },
    {
        dt: "12.20.2021 17:25",
        duration: "3.43",
        num: "+1 888 888-88-88"
    },
]

const smshistory = [
    {
        dt: "12.20.2021 17:25",
        num: "+1 888 888-88-88"
    },
    {
        dt: "12.20.2021 17:25",
        num: "+1 888 888-88-88"
    },
]

const PersonalAccount = ({ navigation }) => {
    const [mobile, setMobile] = useState('')
    const [amount, setAmount] = useState('')
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <ScrollView>
                <View style={styles.subcontainer}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/leftarrow.png')}
                            style={{ height: 15, width: 15, resizeMode: 'contain', marginRight: 10 }}
                        />
                        <Text style={{ fontSize: 14, color: '#000', }}>
                            Back
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>
                        Personal account
                    </Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <TextInput
                        placeholder="+1 999-999-9999"
                        style={{ backgroundColor: '#E5E5E5', borderColor: '#DCDCE4', borderWidth: 1, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 10, marginVertical: 20, color: '#000', opacity: 0.7,width:w-30 }}
                        value={mobile}
                        onChangeText={(text) => setMobile(text)}
                        maxLength={13}
                        keyboardType={'phone-pad'}
                    />
                    <View style={{position:'absolute',right:20}}>
                    <Image 
                    source={require('../assets/downarrow.png')}
                    style={{height:10,width:15,resizeMode:'contain'}}
                    />
                    </View>
                    </View>
                    <View style={styles.levelview}>
                        <Text style={styles.mobiletxt}>
                            +1 999 999-99-99
                        </Text>
                        <Text style={[styles.mobiletxt, { color: '#D75F5C', paddingTop: 20, paddingBottom: 10 }]}>
                            Super Online +
                        </Text>
                        <Text style={styles.mobiletxt}>
                            $15 <Text style={[styles.mobiletxt, { fontWeight: '400' }]}> PER MONTH</Text>
                        </Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                            <ProgressCircle
                                percent={50}
                                radius={50}
                                borderWidth={8}
                                color="#D75F5C"
                                shadowColor="#999"
                                bgColor="#fff"
                            >
                                <Text style={styles.circletxt}>
                                    {'1000'}
                                    <Text style={styles.mintxt}>
                                        {' min'}
                                    </Text>
                                    <Text style={styles.fromvaluetxt}>
                                        {'\nfrom 2000'}
                                    </Text>
                                </Text>
                            </ProgressCircle>
                            <ProgressCircle
                                percent={50}
                                radius={50}
                                borderWidth={8}
                                color="#D75F5C"
                                shadowColor="#999"
                                bgColor="#fff"
                            >
                                <Text style={styles.circletxt}>
                                    {'1000'}
                                    <Text style={styles.mintxt}>
                                        {' GB'}
                                    </Text>
                                    <Text style={styles.fromvaluetxt}>
                                        {'\nfrom 2000'}
                                    </Text>
                                </Text>
                            </ProgressCircle>
                            <ProgressCircle
                                percent={50}
                                radius={50}
                                borderWidth={8}
                                color="#D75F5C"
                                shadowColor="#999"
                                bgColor="#fff"
                            >
                                <Text style={styles.circletxt}>
                                    {'1000'}
                                    <Text style={styles.mintxt}>
                                        {' SMS'}
                                    </Text>
                                    <Text style={styles.fromvaluetxt}>
                                        {'\nfrom 2000'}
                                    </Text>
                                </Text>
                            </ProgressCircle>
                        </View>
                        <View style={{ alignSelf: 'flex-start', marginTop: 15 }}>
                            {pts.map((pt, idx) => {
                                return (
                                    <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', marginTop: 8 }}>
                                        <View style={{ height: 4, width: 4, borderRadius: 2, backgroundColor: '#D75F5C', marginRight: 5 }}>
                                        </View>
                                        <Text style={[styles.pttxt, { color: '#000' }]}>
                                            {pt.pt}
                                        </Text>
                                    </View>
                                )
                            })}
                        </View>
                        <TouchableOpacity style={{ alignSelf: 'center', marginVertical: 15 }}>
                            <Text style={styles.addtxt}>
                                ADD OPTIONS
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 40, width: '80%', borderRadius: 30, backgroundColor: '#D75F5C', alignItems: 'center', justifyContent: 'center', marginTop: 15, alignSelf: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: '700', color: '#fff' }}>
                                CHANGE THE PLAN
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.levelview}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.callhistorytxt}>
                                Balance
                            </Text>
                            <Text style={styles.quantxt}>
                                $30
                            </Text>
                        </View>
                        <Text style={[styles.pttxt, { textAlign: 'left', color: '' }]}>
                            Next write-off 10/10/2021
                        </Text>
                        <TextInput
                            placeholder="$500"
                            style={{ backgroundColor: '#E5E5E5', borderColor: '#DCDCE4', borderWidth: 1, padding: 10, borderRadius: 10, marginTop: 20, marginBottom: 5, color: '#000', opacity: 0.7 }}
                            value={amount}
                            onChangeText={(text) => setAmount(text)}
                        />
                        <Text style={styles.fromtxt}>
                            from $500 to $15000
                        </Text>
                        <TouchableOpacity style={{ height: 40, width: '80%', borderRadius: 30, backgroundColor: '#EEEEEE', alignItems: 'center', justifyContent: 'center', marginVertical: 20 }}>
                            <Text style={{ fontSize: 16, fontWeight: '700', color: '#9C9C9C' }}>
                                BUY
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.addtxt}>
                                VIEW PAYMENT HISTORY
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.levelview}>
                        <Text style={styles.callhistorytxt}>
                            Call history
                        </Text>
                        {callhistory.map((item, index) => {
                            return (
                                <View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                                        <Text style={styles.dttxt}>
                                            {item.dt}
                                        </Text>
                                        <Text style={styles.dttxt}>
                                            {item.duration}
                                        </Text>
                                    </View>
                                    <Text style={styles.mobiletxt}>
                                        {item.num}
                                    </Text>
                                </View>
                            )
                        })}
                        <TouchableOpacity style={{ marginTop: 20 }}>
                            <Text style={styles.addtxt}>
                                VIEW HISTORY
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.levelview}>
                        <Text style={styles.callhistorytxt}>
                            SMS history
                        </Text>
                        {smshistory.map((item, index) => {
                            return (
                                <View style={{ marginTop: 20 }}>
                                    <Text style={styles.dttxt}>
                                        {item.dt}
                                    </Text>
                                    <Text style={styles.mobiletxt}>
                                        {item.num}
                                    </Text>
                                </View>
                            )
                        })}
                        <TouchableOpacity style={{ marginTop: 20 }}>
                            <Text style={styles.addtxt}>
                                VIEW HISTORY
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.levelview, { marginBottom: 20 }]}>
                        <Text style={[styles.callhistorytxt, { textAlign: 'center' }]}>
                            Transfer an account to a new device
                        </Text>
                        <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                            <Image
                                source={require('../assets/qr.png')}
                                style={{ height: 38, width: 38, resizeMode: 'contain' }}
                            />
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.addtxt}>
                                GENERATE QR-CODE
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Footer navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    subcontainer: {
        flex: 1,
        padding: 15,
    },
    title: {
        fontSize: 32,
        lineHeight: 40,
        color: '#051431',
        fontWeight: '700',
        textAlign: 'center',
        paddingVertical: 25
    },
    levelview: {
        // alignItems: 'flex-start',
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 25,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: "transparent",
        shadowOffset: {
            width: 0,
            height: -30,
        },
        shadowOpacity: 0,
        shadowRadius: 30,
        elevation: 20,
        marginTop: 15,
        borderColor: '#707070',
        borderWidth: 0.5,
    },
    mobiletxt: {
        fontSize: 22,
        color: '#051431',
        lineHeight: 28,
        textAlign: 'left',
        fontWeight: '700'
    },
    pttxt: {
        fontSize: 18,
        lineHeight: 32,
        fontWeight: '400',
        textAlign: 'center',
        color: '#000',
    },
    addtxt: {
        fontSize: 16,
        lineHeight: 16,
        fontWeight: '900',
        textAlign: 'center',
        color: "#D75F5C",
        textDecorationLine: "underline"
    },
    fromtxt: {
        fontSize: 12,
        lineHeight: 16,
        color: '#323131',
        fontWeight: '400',
        textAlign: 'left'
    },
    callhistorytxt: {
        fontSize: 18,
        lineHeight: 24,
        fontWeight: '700',
        textAlign: 'left',
        color: '#000',
    },
    dttxt: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '400',
        color: '#A5A5A5',
    },
    quantxt: {
        fontSize: 20,
        lineHeight: 28,
        fontWeight: '700',
        color: '#000',
        marginBottom: 20
    },
    circletxt: {
        fontSize: 14,
        lineHeight: 16,
        color: '#3D3D3D',
        fontWeight: '700',
        textAlign: 'center'
    },
    mintxt: {
        fontSize: 12,
        lineHeight: 16,
        color: '#3D3D3D',
        fontWeight: '700',
    },
    fromvaluetxt: {
        fontSize: 12,
        lineHeight: 16,
        color: '#838383',
        fontWeight: '700',
    }
})

export default PersonalAccount;