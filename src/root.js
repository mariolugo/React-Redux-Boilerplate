import React from 'react-native'
import { Provider } from 'react-redux/native'
import configureStore from './store/configure-store'

import Beers from './containers/app'

const store = configureStore()

class Root extends React.Component {
  render () {
    return (
      <Provider store={store}>
        {() => <Beers />}
      </Provider>
    )
  }
}

export default Root