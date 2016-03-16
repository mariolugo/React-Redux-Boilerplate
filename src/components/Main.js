let React = require('react-native')
let {
  StyleSheet,
  View,
  Dimensions,
  PropTypes,
  TabBarIOS,
  Component,
  Text,
  TextInput,
  TouchableHighlight
} = React 

import {connect} from 'react-redux/native'
import Explore from './Explore'
let favorite64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAD30lEQVR4Xu2b8dkMMRCH56uAEqjApwJUgApQASpABagAFaACvgpQASVQAc/rNvvsZpNNJrebzd3O/HXPbW6TffeXmckkdyFm2QQusltaQzFYChEYLIOlIKBoasoyWAoCiqamLIOlIKBoasraCNZ1EbklIpciwmdnv0Xku4j8EBE+L23V+j1WWYB5JCJ3O0gpEED7KiIfOoCp9rHrm/RbCgs4LzpIpQ8MtFcdvNx7bNXv//FpYd0QkXdHQvLBAO2JiPyaIbZVv6MhaWA96EAN/VGuIlLt8GXPReR9oOFjEXnt+cHU/XKv0y8v6lPOD3JhMeVe5tzwyDb0wdR0tlW/wcfIgcW04+3Wsrci8qxTcc1+UTUqi1oKFoMFVm1j4DVBuecDVsgVJB084flbbUoN9Hc7ltbElIUTBxRRaG9GVAbYJIGOwcLR4lz3agSZSUALwUJVP1cK1acCH1Xd9NUVgrV3VbkXOlFXCBaq2qOv8lWP70Jdvfmw9hoBY+5hFBl9WCSDLC3MDgRYgr1xMHxYrJHuG6mewGcRYU0cTErJrZiKZgcCV8MKi6+sv0ZpQqBnZLDS6jBYaUbTjMGUlaYWVRYbCuzQmB0IsCPVBzxfWdTD7xipnsBsNKTwxdaW2YGAq9oG8yxbRI9lMpvBsy/3xWTVE7g33NcMVR2o5VwzYPLHr+mFYNn68KCU0bqQL0KwttrRaU3Mk52eWA1+71NxMgVjyuJ7ajhPW3vVFcczShlcvzFlUVamvLxHQ1Vk7ZODKnM70nvNuYLbYHPTkGtsiUF3T2kEqmJWBU8ops467K0mX3zWwfmrvSyuR4vmkLNOKYvfIEtKN+c8HaNOfQgtBxbt2eH4eMah8WHO6b9cWHA61+gYjX6+ODSw+O251bs4Yp59aE4LC2Dn4vBVoFJ5VsxFkX8B7JRr9dTWqd2p/vFRoiyXsJ4qMFIEApYKVKmyhoo7NR+mnnolqcNc1nAqwI4CtYSyHMTWC4azy5jc/LHUZ4Xuj8OkJN1Spk9mjn/Cvx5tS8JySyOAtRApiXiAmvsDlQrg0rBc51tXWoOVThWZQOO1YLn1JM6/5rRk2uE/s/7lpYW3JiyXjzHwGucnivOnXGhrw3LjoIjIQnwNlaEm7t0flM19eG27WrDWcv6oiWm3mBOfA1gTlhvHUqWe7NKKVkGx9lvAYixsNeH8S1IMUgLURPW2qm0Fq1Rl1dU0fBtbw8pV2WZqag2WSzHwZaEjAySYXFOXVJaeoy0oa/hM+CJSAFKMVRPMEpCtwXLTEmDkZtWdeGupQ8lLbeI3LSqrCTChQRgsxasxWApY/wAVvqRM7LlANAAAAABJRU5ErkJggg==';
let beer64Icon = 'data:image/png;base64,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';
let drink64Icon = 'data:image/png;base64,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';

let deviceWidth = Dimensions.get('window').width

class Main extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'explore',
      isLoading: false,
      message: ''
    }
  }


  _renderContent(color: string, pageText: string, num?: number) {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>sdfsdf</Text>
        <Text style={styles.tabText}>aaaaaaaaa</Text>
      </View>
    );
  }

  render() {
    let spinner = this.state.isLoading ?
    ( <ActivityIndicatorIOS
        hidden='true'
        size='large'/> ) :
    ( <View/>);
    return(
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'favorites'}
          title="Favorites"
          icon={{uri: favorite64Icon, scale: 3}}
          onPress={() => {
              this.setState({
                  selectedTab: 'favorites',
              });
          }}>
          {this._renderContent('#414A8C', 'Favorites')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'explore'}
          title="Explore"
          style={styles.explore}
          icon={{uri: beer64Icon, scale: 3}}
          onPress={() => {
              this.setState({
                  selectedTab: 'explore',
              });
          }}>
          <Explore style={styles.explore} />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'drink'}
          title="Drink"
          icon={{uri: drink64Icon, scale: 3}}
          onPress={() => {
                this.setState({
                    selectedTab: 'drink',
                });
          }}>
          {this._renderContent('#21551C', 'Explore')}
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
  explore:{
    backgroundColor: '#21551C'
  }
});

export default Main