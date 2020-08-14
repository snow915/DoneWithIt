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
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',  // row-reverse, column (default), column-reverse
    },

    firstInternalView: {
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 100
    },

    secondInternalView: {
        backgroundColor: 'gold',
        width: 100,
        height: 100
    },

    thirdInternalView: {
        backgroundColor: 'tomato',
        width: 100,
        height: 100
    }

});