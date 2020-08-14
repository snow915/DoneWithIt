import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

export default function App() {

    return (
        <View style={styles.externalView}>
            <View style={styles.firstInternalView} />
            <View style={styles.secondInternalView} />
            <View style={styles.thirdInternalView} />
        </View>
    );

}

const styles = StyleSheet.create({

    externalView: {
        backgroundColor: 'green',
        flex: 1
    },

    firstInternalView: {
        backgroundColor: 'dodgerblue',
        flex: 2
    },

    secondInternalView: {
        backgroundColor: 'gold',
        flex: 1
    },

    thirdInternalView: {
        backgroundColor: 'tomato',
        flex: 1
    }

});