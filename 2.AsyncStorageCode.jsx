/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {TouchableHighlight, AsyncStorage, StyleSheet, Text, View, Alert} from 'react-native';
let styles = {}
const zmogus = {
  name: 'Petras Petraitis',
  age: 48,
  occupation: 'Darbininkas kolegijoje'
}
const key = 'darbininkas'

export default class App extends Component<{}> {
  constructor (){
    super()
    this.state = {
      person: {}
    }
    this.getPerson = this.getPerson.bind(this)
  }
  componentDidMount () {
    AsyncStorage.setItem(key, JSON.stringify(zmogus))
    .then(() => console.log('Sarasas...'))
    .catch((err) => console.log('klaida: ', err))
  }
  getPerson() {
    AsyncStorage.getItem(key)
    .then((res) =>this.setState({person: JSON.parse(res)}))
    .catch((err) => console.log('klaida: ', err))
  }
  render() {
    const { person } = this.state
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>Testavimas AsyncStorage</Text>
        <TouchableHighlight onPress={this.getPerson} style={styles.button}>
          <Text>Parodyti darbuotojus</Text>
        </TouchableHighlight>
        <Text>{person.name}</Text>
        <Text>{person.age}</Text>
        <Text>{person.occupation}</Text>  
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1, 
    margin: 20
  },
  button: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed',
    marginTop: 20,
    marginBottom: 20
  }
})
