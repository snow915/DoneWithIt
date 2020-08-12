import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Platform,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

export default function App() {
    const textPressed = () => console.log("Text pressed");
    return (
        <SafeAreaView style={[styles.container, styles.droidSafeArea]}>
            <Text>Image from assets!</Text>
            <Image source={require('./assets/icon.png')}/>
            <Text>Image from web</Text>
            <TouchableWithoutFeedback onPress={() => console.log('Image pressed')}>
                <Image
                    fadeDuration={2000}
                    source={{
                        width: 200,
                        height: 300,
                        uri: 'https://picsum.photos/200/300'
                    }}
                />
            </TouchableWithoutFeedback>
            <StatusBar style="auto"/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    }
});
