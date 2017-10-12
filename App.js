import React from 'react';
import _ from 'underscore'
import { TouchableOpacity, StyleSheet, Text, View , ListView} from 'react-native';

export default class App extends React.Component {
  constructor(){
      super();
      this.state = {
        numbers: _.range(11)
      }
  }

  // press(item){
  //   this.setState({
  //     numbers: this.state.numbers.filter((currentItem) => (item !== currentItem))
  //   });
  // }

  remove(){
    this.setState({
      numbers: this.state.numbers.slice(0, this.state.numbers.length - 1)
    })
  }

  add(){
    this.setState({
      numbers: this.state.numbers.concat(this.state.numbers.length)
    })
  }

  render() {
    var dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => (r1 !== r2)
    });
    return (
      <View style={{flex: 1,  marginTop: 30}}>
        <TouchableOpacity onPress={this.add.bind(this)}><Text style={{fontSize: 50, color: '#1e90ff', textAlign: 'center'}}>Add</Text></TouchableOpacity>
        <TouchableOpacity onPress={this.remove.bind(this)}><Text style={{fontSize: 50, color: 'red', textAlign: 'center'}}>Remove</Text></TouchableOpacity>
        <ListView
          // style={{flex: 1, borderColor: 'red', borderWidth: 1}}
          renderRow={(item) =>
            (<TouchableOpacity style={{flex: 1}}>
              <Text style={{fontSize: 30, textAlign: 'center'}}>{item}</Text>
            </TouchableOpacity>
            )}
          dataSource={dataSource.cloneWithRows(this.state.numbers)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  centeredText: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30
  }

});
