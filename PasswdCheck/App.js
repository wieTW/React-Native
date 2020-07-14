import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

export default function App() {

  const [userPasswd, setUserPasswd] = useState('')
  const successPasswd = '1234'

  const validKeyin = () => {
    // console.log(userPasswd)
    if (userPasswd.length == 4) {
      if (userPasswd === successPasswd) {
        return <Text style={[styles.info, styles.success]}>密碼正確</Text>
      }
      else
        return <Text style={[styles.info, styles.fail]}>密碼錯誤</Text>
    }
    else if (userPasswd.length == 0)
      return <Text style={[styles.info]}>請輸入密碼</Text>
    else
      return <Text style={[styles.info]}>{userPasswd}</Text>
  }

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}

      {/* {validKeyin()} */}
      {
        (userPasswd.length == 4) ?
          ((userPasswd === successPasswd) ?
            <Text style={[styles.info, styles.success]}>密碼正確</Text> :
            <Text style={[styles.info, styles.fail]}>密碼錯誤</Text>
          ) :
          ((userPasswd.length == 0) ?
            <Text style={[styles.info]}>請輸入密碼</Text> :
            <Text style={[styles.info]}>{userPasswd}</Text>
          )
      }

      <TextInput
        style={styles.input}
        onChangeText={(test) => (setUserPasswd(test))}
        secureTextEntry='true'
        maxLength='4'
        keyboardType='numeric'
        value={userPasswd}
        autoFocus='true'
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => setUserPasswd('')}
      >
        <Text style={styles.info}>
          Clear
        </Text>
      </TouchableOpacity>
      <StatusBar style='auto' />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderRadius: 0,
    width: 300,
    height: 40,
    backgroundColor: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    margin: 20
  },
  button: {
    borderRadius: 20,
    width: 300,
    height: 40,
    backgroundColor: 'green',
    textAlign: 'center',
    justifyContent: 'center'
  },
  info: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
  },
  success: {
    color: 'green'
  },
  fail: {
    color: 'red'
  },
});
