import React from 'react'
import Body from './Components/Body'
import appStore from './Utils/Store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={appStore}>
    <Body></Body>
    </Provider>
  )
}

export default App
