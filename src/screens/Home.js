import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import Header from '../components/Header';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const infoList = [
    {
        title: "Protect against Sim Hacks 3 factor Autentification with Yubikey",
        infoImage: require('../assets/safe.png'),
    },
    {
        title: "E-Sim technology Swap from any carrier in under 10 minutes",
        infoImage: require('../assets/sim.png'),
    },
    {
        title: "99% US coverage with 5G capabilities",
        infoImage: require('../assets/5g.png'),
    }
];

const tariffdata = [
    { title: "1", },
    { title: "2", },
    { title: "3", },
    { title: "4", },
    { title: "5", },
    { title: "6", },
]

const amountdata = [
    { title: "$40-80", },
    { title: "$80-120", },
    { title: "$120+", },
]

const leveldata = [
    {
        level: "Level 1",
        cost: "$15",
        month: "Per month / per user",
        data: "10 GB",
        time: "10 MIN",
        sms: "10 SMS",
        pts: [
            { pt: "Mollis Ornare Pretium" },
            { pt: "Aenean Pretium" },
            { pt: "Donec Convallis Metus" },
            { pt: "Integer Volutpat" },
            { pt: "Quis Euismod Pharetra" },
        ],
    },
    {
        level: "Level 2",
        cost: "$25",
        month: "Per month / per user",
        data: "10 GB",
        time: "10 MIN",
        sms: "10 SMS",
        pts: [
            { pt: "Mollis Ornare Pretium" },
            { pt: "Aenean Pretium" },
            { pt: "Donec Convallis Metus" },
            { pt: "Integer Volutpat" },
            { pt: "Quis Euismod Pharetra" },
        ],
    },
    {
        level: "Level 3",
        cost: "$40",
        month: "Per month / per user",
        data: "10 GB",
        time: "10 MIN",
        sms: "10 SMS",
        pts: [
            { pt: "Mollis Ornare Pretium" },
            { pt: "Aenean Pretium" },
            { pt: "Donec Convallis Metus" },
            { pt: "Integer Volutpat" },
            { pt: "Quis Euismod Pharetra" },
        ],
    }
]

const textdata = [
    {
        title: "Your Security Solution",
        img:require('../assets/5g.png'),
        pts: [
            { pt: "Mollis Ornare Pretium" },
            { pt: "Aenean Pretium" },
            { pt: "Donec Convallis Metus" },
            { pt: "Integer Volutpat" },
            { pt: "Quis Euismod Pharetra" },
        ],
    },
    {
        level: "Level 2",
        cost: "$25",
        month: "Per month / per user",
        data: "10 GB",
        time: "10 MIN",
        sms: "10 SMS",
        pts: [
            { pt: "Mollis Ornare Pretium" },
            { pt: "Aenean Pretium" },
            { pt: "Donec Convallis Metus" },
            { pt: "Integer Volutpat" },
            { pt: "Quis Euismod Pharetra" },
        ],
    },
  
]

const Home = ({ navigation }) => {

    const [selectindex, setSelectindex] = useState(0)
    const [levelindex, setLevelindex] = useState(0)
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <ScrollView>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/main.png')}
                        style={styles.imgstyle}
                    />
                </TouchableOpacity>
                <View style={styles.subcontainer}>
                    <FlatList
                        contentContainerStyle={{ marginTop: 10, }}
                        data={infoList}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={styles.subview}>
                                    <Image
                                        source={item.infoImage}
                                        style={styles.subimg}
                                    />
                                    <Text style={styles.txtstyle}>
                                        {item.title}
                                    </Text>
                                </View>
                            )
                        }}
                    />
                    <View style={{ paddingHorizontal: 20 }}>
                        <Text style={styles.poptxt}>
                            Popular tariffs
                        </Text>

                        <View style={styles.popview}>
                            <FlatList
                                horizontal
                                data={tariffdata}
                                renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity
                                            style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: selectindex == index ? '#051431' : 'transparent', alignItems: 'center', justifyContent: 'center', }}
                                            onPress={() => setSelectindex(index)}
                                        >
                                            <Text style={[styles.tariftxt, { color: selectindex == index ? '#fff' : '#000', paddingVertical: 5, }]}>
                                                {item.title}
                                            </Text>
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>
                        <View>
                            <Text style={styles.numsim}>
                                Number of SIM cards
                            </Text>
                        </View>
                        <FlatList
                            data={leveldata}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity>
                                        <View style={[styles.levelview, { backgroundColor: levelindex == index ? '#051431' : '#fff' }]}>
                                            <Text style={[styles.txtstyle, { color: levelindex == index ? '#fff' : '#000' }]}>
                                                {item.level}
                                            </Text>
                                            <Text style={[styles.poptxt, { color: levelindex == index ? '#fff' : '#051431' }]}>
                                                {item.cost}
                                            </Text>
                                            <Text style={[styles.pttxt, { color: levelindex == index ? '#fff' : '#000', marginTop: -20 }]}>
                                                {item.month}
                                            </Text>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 15, width: '90%' }}>
                                                <Text style={[styles.gbtxt, { color: levelindex == index ? '#fff' : '#000' }]}>
                                                    {item.data}
                                                </Text>
                                                <Text style={[styles.gbtxt, { color: levelindex == index ? '#fff' : '#000' }]}>
                                                    {item.time}
                                                </Text>
                                                <Text style={[styles.gbtxt, { color: levelindex == index ? '#fff' : '#000' }]}>
                                                    {item.sms}
                                                </Text>
                                            </View>
                                            <View style={{ alignSelf: 'center' }}>
                                                {item.pts.map((pt, idx) => {
                                                    return (
                                                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', }}>
                                                            <View style={{ height: 4, width: 4, borderRadius: 2, backgroundColor: '#D75F5C', marginRight: 5 }}>
                                                            </View>
                                                            <Text style={[styles.pttxt, { color: levelindex == index ? '#fff' : '#000' }]}>
                                                                {pt.pt}
                                                            </Text>
                                                        </View>
                                                    )
                                                })}
                                            </View>
                                            <TouchableOpacity style={{ height: 40, width: '80%', borderRadius: 30, backgroundColor: '#D75F5C', alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
                                                <Text style={{ fontSize: 16, fontWeight: '700', color: '#fff' }}>
                                                    BUY
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                        <TouchableOpacity style={{ height: 40, width: '100%', borderRadius: 30, backgroundColor: '#051431', alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
                            <Text style={{ fontSize: 16, fontWeight: '700', color: '#fff' }}>
                                VIEW ALL
                            </Text>
                        </TouchableOpacity>
                        <Text style={[styles.poptxt, { paddingHorizontal: 10, marginTop: 50 }]}>
                            Find your perfect plan
                        </Text>
                        <Text style={[styles.quantxt, { textAlign: 'center' }]}>
                            Quantity of lines that you need
                        </Text>
                        <View style={styles.popview}>
                            <FlatList
                                horizontal
                                data={tariffdata}
                                renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity
                                            style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: selectindex == index ? '#051431' : 'transparent', alignItems: 'center', justifyContent: 'center' }}
                                            onPress={() => setSelectindex(index)}
                                        >
                                            <Text style={[styles.tariftxt, { color: selectindex == index ? '#fff' : '#000', paddingVertical: 5, paddingHorizontal: 10 }]}>
                                                {item.title}
                                            </Text>
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>
                        <View style={{ marginTop: 25, }}>
                            <Text style={styles.quantxt}>
                                How much of your data do you use per month?
                            </Text>
                        </View>
                        <View>
                            <Text>Slider</Text>
                        </View>
                        <View style={{ marginTop: 25, }}>
                            <Text style={styles.quantxt}>
                                How much do you currently spend on wireless per line, per month?
                            </Text>
                        </View>
                        <View style={styles.popview}>
                            <FlatList
                                horizontal
                                data={amountdata}
                                renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity
                                            style={{ borderRadius: 20, backgroundColor: selectindex == index ? '#051431' : 'transparent', alignItems: 'center', justifyContent: 'center', marginRight: 25 }}
                                            onPress={() => setSelectindex(index)}
                                        >
                                            <Text style={[styles.tariftxt, { color: selectindex == index ? '#fff' : '#000', paddingVertical: 5, paddingHorizontal: 15 }]}>
                                                {item.title}
                                            </Text>
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>
                        <TouchableOpacity style={{ height: 44, width: '100%', borderRadius: 30, backgroundColor: '#D75F5C', alignItems: 'center', justifyContent: 'center', marginVertical: 35 }}>
                            <Text style={{ fontSize: 16, fontWeight: '700', color: '#fff' }}>
                                SEE MY RECOMENNDED PLAN
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <TouchableOpacity>
                    <Image
                        source={require('../assets/main1.png')}
                        style={styles.imgstyle}
                    />
                </TouchableOpacity>
                <View>
                    <Text style={[styles.poptxt, { color: '#D75F5C' }]}>
                        Over $100m lost to Sim Swap Fraud
                    </Text>
                    <Text style={[styles.poptxt, { paddingVertical: -10 }]}>
                        Protect Yourself with
                    </Text>
                    <View style={{ paddingVertical: 10, alignSelf: 'center' }}>
                        <Image
                            source={require('../assets/logo.png')}
                            style={{ height: 40, width: 120 }}
                        />
                    </View>
                </View>
                <TouchableOpacity style={{ marginVertical: 25 }}>
                    <Image
                        source={require('../assets/main2.png')}
                        style={styles.imgstyle}
                    />
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imgstyle: {
        height: 330,
        width: w,
        resizeMode: 'stretch'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    subcontainer: {
        paddingHorizontal: 15,
    },
    subimg: {
        width: 38,
        height: 48,
        resizeMode: 'contain',
        marginBottom: 5,
    },
    txtstyle: {
        fontSize: 18,
        lineHeight: 24,
        fontWeight: '700',
        textAlign: 'center',
        color: '#000',
    },
    subview: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    tariftxt: {
        fontSize: 18,
        fontWeight: '400',
        lineHeight: 32,
    },
    popview: {
        borderRadius: 25,
        borderColor: '#000',
        borderWidth: 1,
        paddingLeft: 3,
        paddingRight: 3,
        paddingVertical: 2
    },
    poptxt: {
        fontSize: 32,
        lineHeight: 40,
        color: '#051431',
        fontWeight: '700',
        textAlign: 'center',
        paddingVertical: 25
    },
    numsim: {
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.5,
        color: '#000',
        textAlign: 'center',
        paddingVertical: 10,
    },
    pttxt: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: '400',
        textAlign: 'center',
        color: '#000',
    },
    gbtxt: {
        fontSize: 16,
        lineHeight: 32,
        fontWeight: '400',
        textAlign: 'center',
        color: '#051431',
    },
    levelview: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 5,
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
    quantxt: {
        fontSize: 20,
        lineHeight: 28,
        fontWeight: '700',
        textAlign: 'left',
        color: '#000',
        marginBottom: 20
    },
})

export default Home;