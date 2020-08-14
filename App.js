import React from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    SafeAreaView,
    Text,
    Button,
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentContainer}>

                <View style={[styles.contentsStyle, {marginBottom: 50}]}>

                    <View style={styles.sectionInputOne}>
                        <Text>Input one</Text>
                        <View style={styles.inputOne}></View>
                    </View>

                    <View style={styles.sectionInputTwo}>
                        <Text>Input two</Text>
                        <View style={styles.inputTwo}></View>
                    </View>

                    <View style={styles.otherSection} />

                    <View style={styles.sectionButton}>
                        <Button title='Action button' />
                    </View>

                </View>

                <View style={styles.contentsStyle}>

                    <View style={styles.imageContainer} />

                    <View style={styles.infoContainer}>
                        <View style={styles.infoSection}>

                            <View style={styles.firstSectionStart}>
                                <Text style={[styles.textFirstSectionStart, {fontSize: 30, fontWeight: 'bold'}]}>Title</Text>
                                <Text style={styles.textFirstSectionStart}>More info.</Text>
                            </View>

                            <View style={styles.firstSectionEnd}>
                                <Text style={styles.textFirstSectionEnd}>Info</Text>
                            </View>

                        </View>

                        <View style={styles.infoSection}>
                            <View style={styles.firstSectionStart}>
                                <Text style={[styles.textFirstSectionStart, {fontSize: 20, fontWeight: 'bold'}]}>Price</Text>
                                <Text style={styles.textFirstSectionStart}>More info</Text>
                            </View>

                            <View style={styles.firstSectionEnd}>
                                <Button title='More' />
                            </View>
                        </View>

                    </View>

                </View>

            </View>

            <View style={styles.navbarContainer}>

                <View style={styles.itemsPositionsNavbar}>
                    <Icon name="home" size={25} color="#000" />
                    <Text style={styles.titlesItemsNavbar}>Action 1</Text>
                </View>

                <View style={styles.itemsPositionsNavbar}>
                    <Icon name="rocket" size={25} color="#000" />
                    <Text style={styles.titlesItemsNavbar}>Action 2</Text>
                </View>

                <View style={styles.itemsPositionsNavbar}>
                    <Icon name="user" size={25} color="#000" />
                    <Text style={styles.titlesItemsNavbar}>Action 3</Text>
                </View>

            </View>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },

    //CONTENT
    contentContainer: {
        //backgroundColor: 'dodgerblue',
        flex: 1,
        margin: '3%'
    },

    contentsStyle: {
        flex: 1,
        borderStyle: 'solid',
        borderTopColor: 'black',
        borderLeftColor: 'black',
        borderRightColor: 'black',
        borderBottomColor: 'black',
        borderWidth: 2
    },

    //CONTENT ONE

    sectionInputOne: {
        //backgroundColor: '#dbb200',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    inputOne: {
        backgroundColor: '#020100',
        width: '80%',
        height: '25%'
    },

    sectionInputTwo: {
        //backgroundColor: '#4ddb00',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    inputTwo: {
        backgroundColor: '#020100',
        width: '80%',
        height: '25%'
    },

    otherSection: {
        //backgroundColor: '#db00be',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    sectionButton: {
        //backgroundColor: '#0508ad',
        flex: 0.50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    //CONTENT TWO
    imageContainer: {
        backgroundColor: 'gold',
        flex: 1
    },

    infoContainer: {
        //backgroundColor: 'pink',
        flex: 1,
        paddingLeft: '2%',
        paddingRight: '2%'
    },

    infoSection: {
        //backgroundColor: 'green',
        flex: 1,
        flexDirection: 'row'
    },

    firstSectionStart: {
        //backgroundColor: 'white',
        flex: 2,
        justifyContent: 'center'
    },

    textFirstSectionStart: {
        paddingLeft: '10%'
    },

    firstSectionEnd: {
        //backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textFirstSectionEnd: {
        fontWeight: 'bold',
        fontSize: 20
    },

    //NAVBAR
    navbarContainer: {
        height: '7%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderStyle: 'solid',
        borderTopColor: 'black',
        borderTopWidth: 2
    },

    itemsPositionsNavbar: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: '2%'
    },

    titlesItemsNavbar: {
        color: '#000',
        fontWeight: 'bold'
    }

});