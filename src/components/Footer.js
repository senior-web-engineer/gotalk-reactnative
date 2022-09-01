import React, { useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, Dimensions, ScrollView, Image, StyleSheet, FlatList, TextInput, Modal, ActivityIndicator, Linking, PermissionsAndroid } from 'react-native';
import { Switch } from 'react-native-switch';

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
    const [switchvalue, setSwitchvalue] = useState(false)
    return (
        <View style={{ backgroundColor: '#051431', flex: 1 }}>
            <View style={styles.container}>
                <Image
                    source={require('../assets/logo_white.png')}
                    style={{ height: 40, width: 125, resizeMode: 'contain', marginTop: 20 }}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                    <TouchableOpacity>
                        <Text style={styles.title} >
                            Consumer
                        </Text>
                    </TouchableOpacity>
                    <View style={{ marginLeft: 15, marginRight: 25 }}>
                        <Switch
                            value={switchvalue}
                            onValueChange={(val) => setSwitchvalue(val)}
                            disabled={false}
                            // activeText={'On'}
                            // inActiveText={'Off'}
                            circleSize={25}
                            barHeight={30}
                            circleBorderWidth={1}
                            backgroundActive={'#ccc'}
                            backgroundInactive={'#ddd'}
                            circleActiveColor={'#fff'}
                            circleInActiveColor={'#fff'}
                            // renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
                            changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                            innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
                            outerCircleStyle={{}} // style for outer animated circle
                            renderActiveText={false}
                            renderInActiveText={false}
                            switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                            switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                            switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
                            switchBorderRadius={30}
                        />
                    </View>
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
                <View style={{ marginVertical: 20 }}>
                    {pages.map((item, index) => {
                        return (
                            <TouchableOpacity>
                                <Text style={[styles.title, { textAlign: 'left' }]} >
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <Text style={[styles.title, { textAlign: 'left' }]}>
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
