import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyButton from './src/components/button/MyButton'
import MyStyle from './src/stylesheet/MyStyle'

export default function App() {

  let clickTimes = 0

  const showConsole = () => {
    clickTimes++
    console.log(clickTimes)
  }

  return (
    // <View style={styles.container}>
    <View style={MyStyle.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <MyButton
        // myTitle={'Click'}
        myOnPress={() => showConsole()}
        // myStyle={styles.info}
        myColor='red'
        myBackgroundColor='lightblue'
      />

      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   info: {
//     color: 'blue',
//     textAlign: 'center',
//     backgroundColor: 'lightgreen',
//   },
// });
