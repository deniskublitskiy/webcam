import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import * as reducers from '../reducers';

const rootReducer = combineReducers(reducers);

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(thunk)
    ));

    return store;
}