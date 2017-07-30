import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import UserApp from './components/usersApp'
import reducer from './components/reducers/userAppReducer'

const store = createStore(reducer)

render(
    (<Provider store={store}>
        <UserApp />
    </Provider>)
    , document.getElementById('root')
)