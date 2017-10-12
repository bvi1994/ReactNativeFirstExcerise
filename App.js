import React from 'react';
//import _ from 'underscore'
import {StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(){
      super();
      this.state = {
        number: "Loading"
      }
  }

  componentDidMount(){
    fetch('https://horizons-json-cors.s3.amazonaws.com/poem.txt').then((resp) =>
      (resp.text())).then((text) => {
        this.setState({
          number: text.split(' ').length
        })
      }).catch((err) =>{
          number: err
      }
    )
  }

  render() {
    return (
      <View style={styles.centeredText}>
        <Text style={{fontSize: 50}}>Words in poem:</Text><Text style={{fontSize: 50, color: 'red'}}>{this.state.number}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  centeredText: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 30
  }

});
