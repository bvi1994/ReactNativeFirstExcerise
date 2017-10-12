import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      color: 'red'
    };
  }

  disappear(){
    this.setState({
      color: 'white'
    });
  }

  render() {
    return (
      <View style={styles.centered}>
        <TouchableOpacity onPress={this.disappear.bind(this)}>
          <View style={{height: 200, width: 200, backgroundColor: this.state.color}}>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  centered:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }

});
