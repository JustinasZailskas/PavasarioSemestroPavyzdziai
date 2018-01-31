/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {TouchableHighlight, AsyncStorage, StyleSheet, Text, View, Alert, TextInput, TouchableOpacity} from 'react-native';

const key = 'Key'

export default class App extends Component<{}> {
  state = {
    storedValue: [],
    text: '',

  }
  componentWillMount() {
    this.onLoad();
  }
  onChange = (text) => {
    this.setState({text});
  }
  onLoad = async () => {
    try {
      const storedValue = await AsyncStorage.getItem(key);
      this.setState({storedValue});
    } catch(error){
      Alert.alert('Error', 'Klaida');
    }
  }
  onSave = async () => {
    const {text} = this.state;
    try {
      await AsyncStorage.setItem(key, text);
      Alert.alert('Saved', 'Issaugota');
    } catch(error){
      Alert.alert('Error', 'Neissaugota');
    }
  }
  render() {
    const { storedValue, text } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.preview}>{storedValue}</Text>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={this.onChange}
            value={text}
            placeholder="Irasykite kazka"
            />
            <TouchableOpacity onPress={this.onSave} style={styles.btn}>
              <Text>Issaugoti</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onLoad} style={styles.btn}>
              <Text>Ikelti</Text>
            </TouchableOpacity>   
        </View>      
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1, 
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  preview:{
    backgroundColor: '#bdc3c7',
    width: 300,
    height:80,
    padding: 10,
    color: '#333',
    marginBottom: 50,
  },
  input:{
    backgroundColor: '#ecf0f1',
    width: 300,
    height: 40,
    padding: 5
  },
  btn: {
    padding: 10,
    backgroundColor: '#ededed',
    marginTop: 10,
  }
})
