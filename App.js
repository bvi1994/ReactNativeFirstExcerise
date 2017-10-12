import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      count: 0
    };
  }

  up(){
    this.setState({
      count: this.state.count + 1
    })
  }

  down(){
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <View style={styles.centeredText}>
        <Text style={{fontSize: 60}}>{this.state.count}</Text>
        <TouchableOpacity onPress={this.up.bind(this)}><Text style=
          {{fontSize: 40}}>
          Up
        </Text></TouchableOpacity>
        <TouchableOpacity onPress={this.down.bind(this)}><Text style={
          {fontSize: 40}}>
          Down
        </Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredText:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }

});
