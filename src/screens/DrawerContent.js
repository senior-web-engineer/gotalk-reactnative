import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions, Image } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Switch } from 'react-native-switch';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default function DrawerContent({ navigation }) {
    const [switchvalue, setSwitchvalue] = useState(false)
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', }}>
            <DrawerContentScrollView>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 30, borderBottomColor: '#000', borderBottomWidth: 2, justifyContent: 'space-between', paddingHorizontal: 40, }}>
                    <TouchableOpacity>
                        <Text style={styles.title}>
                            Sign in
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={[styles.title, { color: '#fff', textAlign: 'center', paddingHorizontal: 20, paddingVertical: 10, backgroundColor: '#D75F5C', borderRadius: 30 }]}>
                            Find a Plan
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.title}>
                            Logout
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingHorizontal: 40, marginTop: 10 }}>
                    <TouchableOpacity>
                        <Text style={styles.title}>
                            Check coverage
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.title}>
                            How it works
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.title}>
                            FAQ
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.title}>
                            Fraud Protection
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.title}>
                            Blog
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.title}>
                            Linxdot
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', paddingHorizontal: 40, marginTop: 25, alignItems: 'center' }}>
                    <Text style={styles.title}>
                        Consumer
                    </Text>
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
                    <Text style={styles.title}>
                        Business
                    </Text>

                </View>
            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        color: '#000',
        textAlign: 'left',
        fontWeight: '700',
        lineHeight: 30,
    }
})