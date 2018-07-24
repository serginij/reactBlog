import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Blog from './containers/Blog/Blog';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './store/reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
        applyMiddleware(thunk)
));

const blog = <Provider store={store}>
        <BrowserRouter>
            <Blog />
        </BrowserRouter>
    </Provider>

ReactDOM.render(blog, document.getElementById('root'));
registerServiceWorker();
