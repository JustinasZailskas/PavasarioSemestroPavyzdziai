
//Pirmas pavyzdys
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Animated, 
    Button,
} from 'react-native';
export default class RNAnimations extends Component {
    marginTop = new Animated.Value(20); 
    animate = () => {
        Animated.timing(
            this.marginTop,
            {
                toValue: 200,
                duration: 500,
            }
        ).start();
    }
    render() {
        return (
            <View style={styles.container}>
                <Button 
                title='Animate Box'
onPress={this.animate}
                />
<Animated.View style={[styles.box, { marginTop: this.marginTop }]} /> 
</View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 50,
    },
    box: {
        width: 150,
        height: 150,
        backgroundColor: 'red'
    }
});

//Antras pavyzdys
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Animated,
    Button,
    TextInput,
    Text,
} from 'react-native';
export default class RNAnimations extends Component {
    animatedWidth = new Animated.Value(200); 
    animate = (value) => {
        Animated.timing(
            this.animatedWidth,
            {
                toValue: value,
                duration: 750,
            }
        ).start()
    }
    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={{ width: this.animatedWidth }}> 
<TextInput 
                    style={[styles.input]}
                    onBlur={() => this.animate(200)}
                    onFocus={() => this.animate(325)}
                    ref={input => this.input = input}
                    />
</Animated.View>
                <Button
                    title='Submit'
                    onPress={() => this.input.blur()}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 50,
    },
    input: {
        height: 50,
        marginHorizontal: 15,
        backgroundColor: '#ededed',
        marginTop: 10,
        paddingHorizontal: 9,
    },
});