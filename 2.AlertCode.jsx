/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {TouchableHighlight, StyleSheet, Text, View, Alert} from 'react-native';

export default class App extends Component<{}> {
  constructor (){
    super()
    this.state = {
      showMessage: false
    }
    this.showAlert = this.showAlert.bind(this)
  }
  showAlert(){
    Alert.alert(
      'Title',
      'Message',
      [
        {
          text: 'Iseiti',
          onPress: () => console.log('Atsaukta...')
        },
        {
          text: 'Parodyti zinute',
          onPress: () => this.setState({showMessage: true})
        }
      ]
    )
  }
  render() {
    const { showMessage } = this.state
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.showAlert} style={styles.button}>
          <Text>Parodyti pranesima</Text>
        </TouchableHighlight>
        {
          showMessage && <Text>Pavyko</Text>
        }  
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  },
  button: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed'
  }
})
