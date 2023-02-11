/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import CustomButton from './components/button';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { counter } = this.state;
    if (nextState.counter === counter) return false;
    return true;
  }

  handleUp() {
    const { counter: ct } = this.state;
    this.setState({ counter: ct + 1 })
  }
  handleDown() {
    const { counter: ct } = this.state;
    this.setState({ counter: ct - 1 })
  }

  handleReset() {
    this.setState({ counter: 0 })
  }

  render() {
    const { counter } = this.state;
    console.log("render");
    return (

      <View style={styles.container}>

        <View style={styles.containerSub}>

          <CustomButton label="-" action={this.handleDown} />

          <View style={styles.contercontainer}>
            <Text style={styles.conter}>{counter}</Text>
          </View>

          <CustomButton label="+" action={this.handleUp} />

        </View>
        <View style={styles.containerSubReset}>
          <TouchableOpacity
            style={styles.btnReset} onPress={this.handleReset}>
            <Text> Reset </Text>
          </TouchableOpacity>


        </View>

      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#576574',
    justifyContent: 'center'

  },
  containerSub: {
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    flexDirection: 'row'
  },
  containerSubReset: {
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  contercontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  conter: {
    fontSize: 40,
    color: '#c8d6e5',
    fontWeight: 'bold'
  },
  btnReset: {
    height: 50,
    width: '40%',
    backgroundColor: '#c8d6e5',
    justifyContent: 'center',
    alignItems: 'center'
  }

});

export default App;
