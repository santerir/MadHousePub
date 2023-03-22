/* 
 *  Copyright (c) 2023 Santtu Räisänen github.com/santerir
 *  
 *  This work is licensed under the terms of the MIT license.  
 *  For a copy, see <https://opensource.org/licenses/MIT>.
 */

import { createStore as reduxCreateStore, applyMiddleware, compose, combineReducers } from 'redux';

import { Modal_state as modal } from '../components/modal'

const rootReducer = combineReducers(
    {
        [modal.r_key]: modal.reducer
    }
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStore = () => reduxCreateStore(
    rootReducer,
    composeEnhancers()
);

export default () => {
    const store = createStore();
    return store;
};
