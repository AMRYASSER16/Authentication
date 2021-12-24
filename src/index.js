import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';
import Feature from './components/Feature';
import reducers from './reducers';

const store = createStore(reducers, {
    auth: { authenticated: localStorage.getItem('token') }
}, applyMiddleware(reduxThunk))

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Routes>
                    <Route path='*' exact element={<Welcome />} />
                    <Route path='/signup' exact element={<Signup />} />
                    <Route path='/signin' exact element={<Signin />} />
                    <Route path='/signout' exact element={<Signout />} />
                    <Route path='/feature' exact element={<Feature />} />
                </Routes>
            </App>
        </BrowserRouter>
    </Provider>, document.querySelector('#root'))