import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Platform,
    Button,
    Alert,
    StatusBar
} from 'react-native';

export default function App() {

    const showAlert = () => {
        Alert.alert('My title', 'My message', [
            { text: 'Yes', onPress: () => console.log('Yes') },
            { text: 'No', onPress: () => console.log('No') }
        ]);
    }

    // For android not working, only for iOS
    const showPrompt = () => {
        Alert.prompt('Personal data', 'Whats your name?', (text)=> console.log(text));
    }

    return (
        <SafeAreaView style={styles.droidSafeArea}>
            <View style={styles.container}>
                <Text>Image from assets!</Text>
                <Button
                    title='Show Alert'
                    onPress={ showAlert }
                />
                <Button
                    title='Show Prompt'
                    color='orange'
                    onPress={ showPrompt }
                />
                <StatusBar style="auto"/>
            </View>

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
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    }
});
