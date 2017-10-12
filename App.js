import React from 'react';
//import _ from 'underscore'
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {StackNavigator} from 'react-navigation';

class App extends React.Component {
  static navigationOptions = (props) => ({
    title: 'Page 1',
    headerRight: <TouchableOpacity onPress={() => props.navigation.navigate('Page2')}><Text style={{fontSize:20}}>Page 2!</Text></TouchableOpacity>
  })

  render() {
    return (
      <View style={styles.centeredText}>
        <Text style={{fontSize:50}}>Page 1</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Page2')}><Text style={{fontSize:30}}>To Page 2!</Text></TouchableOpacity>
      </View>
    );
  }
}

class Second extends React.Component{
  static navigationOptions = (props) => ({
    title: 'Page 2'
  })
  render(){
    return(
      <View style={styles.centeredText}>
        <Text style={{fontSize:50}}>Page 2</Text>
      </View>
    )
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

const Navigator = StackNavigator({
  Home: {screen: App},
  Page2: {screen: Second}
});

export default Navigator;
