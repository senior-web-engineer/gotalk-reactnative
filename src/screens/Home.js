import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, Dimensions, TouchableOpacity, FlatList, TextInput } from 'react-native';
import Footer from "../components/Footer";
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
        img: require('../assets/main3.png'),
        pts: [
            { pt: "We provide you with optional Two-Factor or Three Factor Authentication using Yubikey, which protects you from SIM fraud and hacking" },
            { pt: "We don’t sell or share your data" },
            { pt: "We have sitewide SSL configuration and sophisticated cloud infrastructure for the highest security possible" },
        ],
    },
    {
        title: "Nationwide Coverage & Fast Connectivity",
        img: require('../assets/main4.png'),
        pts: [
            { pt: "99% US coverage for your calls, data, and texts" },
            { pt: "GoTalk uses the largest and fastest 5G network in America" },
            { pt: "We offer 5G Ultra Capacity - have speed as fast as WiFi on your phone" },
        ],
    },

]

const realstories = [
    {
        title: "Andrew Life",
        position: "Vice President, GoPro",
        infoImage: require('../assets/airbnb.png'),
        comment: "Favorable rates at minimal prices - what I was looking for. Thank you for such a reliable connection. I bought SIM cards for the whole..."
    },
    {
        title: "Kristin Watson",
        position: "Vice President, GoPro",
        infoImage: require('../assets/bookmyshow.png'),
        comment: "Landify saved our time in designing my company page",
    },
    {
        title: "Floyd Miles",
        position: "Vice President, GoPro",
        infoImage: require('../assets/hubspot.png'),
        comment: "To quickly start my startup landing page design. I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable. To quickly start my startup landing page design. I was looking for a landing page UI Kit. Landify is one of",
    },
    {
        title: "Kristin Watson",
        position: "Vice President, GoPro",
        infoImage: require('../assets/bookmyshow.png'),
        comment: "Landify saved our time in designing my company page",
    }
];

const Home = ({ navigation }) => {

    const [selectindex, setSelectindex] = useState(0)
    const [levelindex, setLevelindex] = useState(0);
    const [fulltxtindex, setFulltxtindex] = useState(null);
    const [zipcode, setZipcode] = useState("")
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
                <View style={{ marginHorizontal: 25 }}>
                    <FlatList
                        data={textdata}
                        renderItem={({ item, index }) => {
                            return (
                                <View>
                                    <Text style={[styles.poptxt, { textAlign: 'left', paddingTop: 15, paddingBottom: 25 }]}>
                                        {item.title}
                                    </Text>
                                    <View style={{}}>
                                        {item.pts.map((pt, idx) => {
                                            return (
                                                <View style={{ flexDirection: 'row', alignSelf: 'flex-start', alignItems: 'flex-start' }}>
                                                    <View style={{ height: 4, width: 4, borderRadius: 2, backgroundColor: '#D75F5C', marginRight: 5, marginTop: 10 }}>
                                                    </View>
                                                    <Text style={[styles.pttxt, { color: '#000', textAlign: 'left', }]}>
                                                        {pt.pt}
                                                    </Text>
                                                </View>
                                            )
                                        })}
                                    </View>
                                    <View style={{ height: 342, width: '100%', borderRadius: 50, marginTop: 20 }}>
                                        <Image
                                            source={item.img}
                                            style={{ height: 340, width: '100%', borderRadius: 50 }}
                                        />
                                    </View>
                                    {index == 0 ?
                                        <View style={{ height: 1, width: '100%', backgroundColor: '#D75F5C', marginTop: 25 }}>
                                        </View>
                                        : null}
                                </View>
                            )
                        }}
                    />
                </View>
                <View style={{ width: w, backgroundColor: '#051431', marginTop: 20, marginBottom: 30, paddingBottom: 30 }}>
                    <View style={{ paddingHorizontal: 25 }}>
                        <Text style={[styles.poptxt, { color: '#fff', paddingHorizontal: 40 }]}>
                            Real stories from Real Customers
                        </Text>
                        <FlatList
                            data={realstories}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={{ paddingHorizontal: 10, backgroundColor: '#fff', borderRadius: 9, marginTop: 25, paddingVertical: 15, paddingHorizontal: 20 }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                                            <Image
                                                source={item.infoImage}
                                                style={{ height: 40, width: 128, resizeMode: 'contain' }}
                                            />
                                            {item.comment.length > 120 && fulltxtindex != index ?
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        setFulltxtindex(index)
                                                    }}
                                                >
                                                    <Image
                                                        source={require('../assets/downarrow.png')}
                                                        style={{ height: 10, width: 15 }}
                                                    />
                                                </TouchableOpacity>
                                                : fulltxtindex == index ?
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            setFulltxtindex(null)
                                                        }}
                                                    >
                                                        <Image
                                                            source={require('../assets/uparrow.png')}
                                                            style={{ height: 10, width: 15 }}
                                                        />
                                                    </TouchableOpacity>
                                                    : null
                                            }
                                        </View>
                                        {fulltxtindex == index ?
                                            <Text style={styles.tariftxt}>
                                                {item.comment}
                                            </Text>
                                            :
                                            <Text numberOfLines={4} style={styles.tariftxt}>
                                                {item.comment}
                                            </Text>
                                        }
                                        <Text style={[styles.txtstyle, { textAlign: 'left', marginTop: 30 }]}>
                                            {item.title}
                                        </Text>
                                        <Text style={[styles.numsim, { textAlign: 'left' }]}>
                                            {item.position}
                                        </Text>
                                    </View>
                                )
                            }}
                        />
                    </View>
                </View>
                <View style={{ paddingHorizontal: 25 }}>
                    <Text style={{ color: '#051431', fontSize: 36, lineHeight: 44, textAlign: 'center', paddingBottom: 20 }}>
                        Check Coverage in your area
                    </Text>
                    <Text style={[styles.tariftxt, { textAlign: 'center' }]}>
                        Enter your ZIP code to see coverage in your area
                    </Text>
                    <TextInput
                        placeholder="ZIP Code"
                        style={{ backgroundColor: '#E5E5E5', borderColor: '#DCDCE4', borderWidth: 1, padding: 10, borderRadius: 10, marginVertical: 20,color:'#000',opacity:0.7 }}
                        value={zipcode}
                        onChangeText={(text) => setZipcode(text)}
                        maxLength={6}
                    />
                    <TouchableOpacity style={{ height: 40, width: '100%', borderRadius: 30, backgroundColor: '#D75F5C', alignItems: 'center', justifyContent: 'center', marginTop: 15,marginBottom:30 }}>
                        <Text style={{ fontSize: 16, fontWeight: '700', color: '#fff' }}>
                            SUBMIT
                        </Text>
                    </TouchableOpacity>
                </View>
                <Footer navigation={navigation}/>
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
        color: '#000',
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