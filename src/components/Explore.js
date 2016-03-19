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

import SearchBar from 'react-native-search-bar/';

const width = Dimensions.get('window').width; 
const height = Dimensions.get('window').height;

class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      message: ''
    };
  }
  onSearchPressed() {
    var query = urlForQueryAndPage('q', this.state.searchString, 1);
    this._executeQuery(query);
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
         <ScrollView
          contentContainerStyle={styles.contentContainer}
          style={styles.scrollView}>
          <Text style={styles.description}>Search by</Text>
          <View style={styles.listContainer}>
          <TouchableHighlight
            onPress={() => this.rowPressed(rowData.id)}>
            <View style={styles.list}>
              <Text style={styles.listText}>
                Brewery
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => this.rowPressed(rowData.id)}>
            <View style={styles.list2}>
              <Text style={styles.listText}>
                Style
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => this.rowPressed(rowData.id)}>
            <View style={styles.list}>
              <Text style={styles.listText}>
                Week's Featured Beers and Brewery
              </Text>
            </View>
          </TouchableHighlight>
        </View>
        </ScrollView>
        <SearchBar
          ref='searchBar'
          placeholder='Search for Beers'
          style={styles.searchBar}
          onSearchButtonPress={this.onSearchPressed.bind(this)}
          onCancelButtonPress={this.state.searchString}
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
  }
});

export default Explore