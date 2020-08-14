import React from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    Platform,
    StatusBar,
    Dimensions
} from 'react-native';
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {

    console.log(useDimensions())
    console.log(useDeviceOrientation())
    const { landscape } = useDeviceOrientation();

    return (
        <SafeAreaView style={styles.droidSafeArea}>
            <View style={styles.container}>
                <View style={{
                    backgroundColor: 'dodgerblue',
                    width: '100%',
                    height: landscape ? '100%' : '25%'
                }}>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //alignItems: 'center',
        //justifyContent: 'center',
    },

    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    }
});
