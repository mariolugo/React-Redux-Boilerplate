'use strict';

import React, {
  StyleSheet,
  Text,
  TextInput,
  View,
  ActivityIndicatorIOS,
  Image,
  Component,
  Dimensions,
  TouchableHighlight,
  ScrollView
} from 'react-native';

const width = Dimensions.get('window').width; 
const height = Dimensions.get('window').height;

import MapView from 'react-native-maps';

class Drink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      message: ''
    };
  }

  render() {
    var spinner = this.state.isLoading ?
    ( <ActivityIndicatorIOS
        hidden='true'
        size='large'/> ) :
    ( <View/>);
    return (
      <View style={styles.container}>
        {spinner}
        <MapView 
          style={ styles.map }
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    marginTop:20,
    fontSize: 18,
    textAlign: 'center',
    color: 'black'
  },
  container: {
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  scrollView: {
    height: height-70,
    width: width,
    backgroundColor: '#fbfbfb',
    position:'absolute',
    marginTop:-25,
  },
  listContainer: {
    flex: 1,
    width:width
  },
  list: {
    height:50,
    backgroundColor: '#fbfbfb',
    borderTopColor:'#b7b7b7',
    borderTopWidth:1,
    borderBottomColor:'#b7b7b7',
    borderBottomWidth:1,
  },
  list2: {
    height:50,
    backgroundColor: '#fbfbfb',
  },
  listText:{
    position:'absolute',
    top:16,
    left:10,
    color: 'black'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchBar:{
    width:width,
    fontSize: 18,
    height:40,
    marginTop:-1
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    color: '#48BBEC',
    backgroundColor: '#fff'
  },
    image: {
    width: 217,
    height: 128
  },
   map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width:width,
    height:height-20
  },
});

export default Drink