import React from 'react-native'

let {
  View,
  Component
} = React 

// import {connect} from 'react-redux/native'

import Main from '../components/Main'

class MainContainer extends React.Component {
  render() {
    return (
      <Main {...this.props} />
    )
  }
}

export default MainContainer