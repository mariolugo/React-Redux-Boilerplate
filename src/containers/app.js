import React from 'react-native'

let {
  StyleSheet,
  NavigatorIOS,
  PropTypes,
  Component
} = React

import MainContainer from './MainContainer'

class Beers extends React.Component {
  render () {
    return (
      <NavigatorIOS 
        style={styles.navigator}
        initialRoute={{
          title: 'Beers',
          component: MainContainer,
        }}
      />
    )
  }
}

let styles = StyleSheet.create({
  navigator: {
    flex: 1,
  }
})

export default Beers