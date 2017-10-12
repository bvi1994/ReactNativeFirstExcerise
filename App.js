import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      // <View style={{flex: 1}}>
      //   <View style={styles.backgroundColorRed}></View>
      //   <View style={styles.backgroundColorBlue}></View>
      // </View>
      // <View style={styles.centeredText}>
      //   <Text>I am centered!</Text>
      // </View>
      // <View style={styles.centeredText2}>
      //   <Text style={{
      //     color: 'blue',
      //     fontSize: 100
      //   }}>Blue</Text>
      //   <Text style={{
      //     color: 'red',
      //     fontSize: 50
      //   }}>Red</Text>
      // </View>
      <View style={styles.centeredText3}>
        {/* <TouchableOpacity> */}
          {/* <Text style={{
            fontSize: 100
          }}>I love Matthew</Text>
        </TouchableOpacity> */}
        <TouchableOpacity><Text style={{
          fontSize: 100
        }}>I</Text></TouchableOpacity>
        <TouchableOpacity><Text style = {{
          fontSize: 100
        }}>Love</Text></TouchableOpacity>
        <TouchableOpacity><Text style = {{
          fontSize: 100
        }}>You</Text></TouchableOpacity>
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
  // backgroundColorRed: {
  //   backgroundColor: 'red',
  //   flex: 1
  // },
  // backgroundColorBlue: {
  //   backgroundColor: '#1e90ff',
  //   flex: 2
  // }
  // centeredText:{
  //   flex: 1,
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // }
  // centeredText2:{
  //   flex: 1,
  //   flexDirection: 'column',
  //   alignItems: 'center',
  // }
  centeredText3:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
