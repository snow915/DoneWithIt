import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';

export default function App() {
  const textPressed = () => console.log("Text pressed");
  return (
    <SafeAreaView style={[styles.container, styles.droidSafeArea]}>
      <Text numberOfLines={1} onPress={textPressed}>Let's get started! wwefwefwwwfwefwefwyurtyhrttyrt rtrtyrtyrtyrthrthrth rthrthrthrthrth rthrthrthrthrt hrthrtth</Text>
      <StatusBar style="auto" />
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

  droidSafeArea : {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0
  }
});
