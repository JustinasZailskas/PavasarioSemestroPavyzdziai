import React, {Component} from 'react';
import {AppRegistry, Text, View, Navigator, StyleSheet, ListView, TouchableHighlight, AsyncStorage, Image, Vibration} from 'react-native';

export default class Pratimai extends Component{
    constructor(){

        super();

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            pratimaiData: ds
        }

        //tam kad būtų accesas į šių funkcijų this
        this.pressRow = this.pressRow.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }

    //kad atvaizduotų
    componentDidMount(){
        this.getPratimai();
    }

    componentWillMount(){
        this.getPratimai();
    }

    pressRow(todo){
       //navigacija i INFO page'a
       Vibration.vibrate();
       this.props.navigator.push({
           id:'placiau',
           todo: todo
       });
    }

    //atsakingas uz atvaizdavima kiekvieno iraso irasyto
    renderRow(todo){
      let image;
      if(todo.completed){
        image = <Image
          style={styles.checkImage}
          source={require('./check.png')}
        />
      } else {
        image = <Text></Text>
      }
        return(
            <TouchableHighlight onPress={() => {
                this.pressRow(todo);
            }}>
                <View style={styles.row}>
                    <Text style={styles.text}>{todo.text}</Text>
                    <View style={styles.check}>
                    {image}
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    getPratimai(){
        //priima is PridetiPratimaForma uzpildyta irasa
        AsyncStorage.getItem('pratimai').then((value) => {
            if(value == undefined){
              console.log('Ner pratimuku...');
            }   else{
              //idedam i json formata
                let pratimai = JSON.parse(value);
                //nustatom data source i situos uzrasus
                this.setState({
                    pratimaiData: this.state.pratimaiData.cloneWithRows(pratimai)
                });
            }
        });
    }

    render(){
        return(
            <ListView
                dataSource={this.state.pratimaiData}
                renderRow={this.renderRow}
            />
        )
    }
}

const styles ={
    row: {
        marginTop: 5,
        flexDirection:'row',
        padding:10,
        backgroundColor: '#F4F4F4',
    },
    text: {
      flex: 1,
    },
    check:{
      flex:1,
    },
    checkImage:{
      alignSelf:'flex-end'
    }
}

AppRegistry.registerComponent('Pratimai', () => Pratimai);
